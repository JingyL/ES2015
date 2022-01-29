process.env.NODE_ENV = 'test';

const request = require('supertest');
const app = require('../app');
const db = require('../db');

// let testCompanies;
beforeEach(async () => {
  await db.query(`DELETE FROM companies`)
  const result = await db.query(`
   INSERT INTO companies
   (code, name, description) 
   VALUES ('apple', 'apple','Maker of IOS'),
   ('hw', 'huawei','Maker of phones'),
   ('ibm', 'ibm','ibm') 
   RETURNING  code, name, description`);
  //  testCompanies = result.rows
})

afterEach(async () => {
  await db.query(`DELETE FROM companies`)
})
afterAll(async () => {
  await db.end()
})


describe("GET /companies", () => {
  test("Get a list with one company", async () => {
    const res = await request(app).get('/companies')
    expect(res.statusCode).toBe(200);
    // testCompanies.map(c => c) undefined
    expect(res.body).toEqual({
      companies:
        [{
          "code": "apple",
          "description": "Maker of IOS",
          "name": "apple",
        },
        {
          "code": "hw",
          "description": "Maker of phones",
          "name": "huawei",
        },
        {
          "code": "ibm",
          "description": "ibm",
          "name": "ibm",
        }]
    })
  })

})


describe("GET /companies/apple", function () {

  test("It return company info", async function () {
    const response = await request(app).get("/companies/apple");
    console.log(response.body)
    expect(response.body).toEqual(
      {
        company: {
          "code": "apple",
          "description": "Maker of IOS",
          "name": "apple",
        }
      }
    );
  });

  test("It should return 404 for no-such-company", async function () {
    const response = await request(app).get("/companies/blargh");
    expect(response.status).toEqual(404);
  })
});



describe("POST /companies", function () {

  test("It should add company", async function () {
    const response = await request(app)
        .post("/companies")
        .send({code: "taco", name: "Tacobell", description: "Yum!"});

    expect(response.body).toEqual(
        {
          "company": {
            code: "taco",
            name: "Tacobell",
            description: "Yum!",
          }
        }
    );
  });

  test("It should return 500 for conflict", async function () {
    const response = await request(app)
        .post("/companies")
        .send({name: "Apple", description: "Huh?"});

    expect(response.status).toEqual(500);
  })
});


describe("PUT /", function () {

  test("It should update company", async function () {
    const response = await request(app)
        .put("/companies/apple")
        .send({name: "AppleEdit", description: "NewDescrip"});

    expect(response.body).toEqual(
        {
          "company": {
            code: "apple",
            name: "AppleEdit",
            description: "NewDescrip",
          }
        }
    );
  });

  test("It should return 404 for no-such-comp", async function () {
    const response = await request(app)
        .put("/companies/blargh")
        .send({name: "Blargh"});

    expect(response.status).toEqual(404);
  });

});


describe("DELETE /", function () {

  test("It should delete company", async function () {
    const response = await request(app)
        .delete("/companies/apple");

    expect(response.body).toEqual({"msg": "DELETED!"});
  });

});

