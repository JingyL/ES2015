process.env.NODE_ENV = "test";
const request = require("supertest");

const app = require("../app");
let items = require("../fakeDb");


let shoes = { name: "shoes", price:"3" };

beforeEach(function () {
  items.push(shoes);
});

afterEach(function () {
  items.length = 0;
});

describe("GET /items", () => {
  test("Get all items", async () => {
    const res = await request(app).get("/items");
    expect(res.statusCode).toBe(200)
    expect(res.body).toEqual( {"items": [{
          name: "shoes",
          price: "3"
        }
      ]})
  })
})

describe("GET /items/:name", () => {
  test("Get items by name", async () => {
    const res = await request(app).get(`/items/${shoes.name}`);
    expect(res.statusCode).toBe(200)
    expect(res.body).toEqual({"item":{ name: "shoes", price:"3" }})
  })
  test("Responds with 404 for invalid item", async () => {
    const res = await request(app).get(`/items/pearl`);
    expect(res.statusCode).toBe(404)
  })
})

describe("POST /items", () => {
  test("Creating a item", async () => {
    const res = await request(app).post("/items").send({ name: "wallet", price:"30" });
    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual({added: { name: "wallet", price:"30" }});
  })
  test("Responds with 400 if name is missing", async () => {
    const res = await request(app).post("/items").send({});
    expect(res.statusCode).toBe(400);
  })
})

describe("/PATCH /items/:name", () => {
  test("Updating a item's name", async () => {
    const res = await request(app).patch(`/items/${shoes.name}`).send({ name: "shoes", price:"30" });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({"item":{ name: "shoes", price:"30" }});
  })
  test("Responds with 404 for invalid name", async () => {
    const res = await request(app).patch("/items/Piggles").send({ name: "Piggles", price:"30" });
    expect(res.statusCode).toBe(404);
  })
})

describe("/DELETE /items/:name", () => {
  test("Deleting a item", async () => {
    const res = await request(app).delete(`/items/${shoes.name}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: 'Deleted' })
  })
  test("Responds with 404 for deleting invalid item", async () => {
    const res = await request(app).delete("/items/p");
    expect(res.statusCode).toBe(404);
  })
})

