process.env.NODE_ENV = 'test';

const request = require('supertest');
const app = require('../app');
const db = require('../db');


beforeEach(async () => {
    await db.query(`DELETE FROM companies`)
    await db.query(`DELETE FROM invoices`)
    await db.query("SELECT setval('invoices_id_seq', 1, false)");
    await db.query(`
   INSERT INTO companies
   (code, name, description) VALUES    
   ('hw', 'huawei','Maker of phones'),
   ('ibm', 'ibm','ibm') 
   RETURNING  code, name, description`);
   await db.query(`
  INSERT INTO invoices (comp_code, amt, paid, add_date, paid_date)
  VALUES ('ibm', 100, false, '2018-01-01', null)
  `);
})

afterAll(async () => {
    await db.end()
})


describe("GET /invoices", () => {
    test("Get a list with one invoice", async () => {
        const res = await request(app).get('/invoices')
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({
            invoices: [
                {
                    id: 1,
                    comp_code: "ibm",
                    amt: 100,
                    add_date: "2018-01-01T05:00:00.000Z",
                    paid: false,
                    paid_date: null
                }
            ]
        })
    })
})


describe("GET /invoices/1", () => {
    test("Get invoice info", async () => {
        const res = await request(app).get('/invoices/1')
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({
            // when should i use "", when don't
            "invoice":
            {
                id: 1,
                company: {
                    code: "ibm",
                    name: "ibm",
                    description: "ibm",
                },
                amt: 100,
                add_date: "2018-01-01T05:00:00.000Z",
                paid: false,
                paid_date: null
            }
        })
    })
})


describe("POST /invoices", function () {

    test("It should add invoice", async function () {
      const response = await request(app)
          .post("/invoices")
          .send({amt: 400, comp_code: 'hw'});
  
      expect(response.body).toEqual(
          {
            "invoice": {
              id: 2,
              comp_code: "hw",
              amt: 400,
              add_date: expect.any(String),
              paid: false,
              paid_date: null,
            }
          }
      );
    });
  });





  describe("PUT /", function () {

    test("It should update an invoice", async function () {
      const response = await request(app)
          .put("/invoices/1")
          .send({amt: 1000, paid: false});
  
      expect(response.body).toEqual(
          {
            "invoice": {
                id: 1,
                comp_code: "ibm",
                amt: 1000,
                add_date: expect.any(String),
                paid: false,
                paid_date: null,
            }
          }
      );
    });
  
    test("It should return 404 for no-such-invoice", async function () {
      const response = await request(app)
          .put("/invoices/9999")
          .send({amt: 1000});
  
      expect(response.status).toEqual(404);
    });
  
  });
  
  
  describe("DELETE /", function () {
  
    test("It should delete invoice", async function () {
      const response = await request(app)
          .delete("/invoices/1");
   console.log(response.body)
      expect(response.body).toEqual({"msg": "DELETED!"});
    });
  

  });
  