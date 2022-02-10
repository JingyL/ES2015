// "use strict";

// process.env.NODE_ENV = "test"
// const request = require("supertest");
// const jwt = require("jsonwebtoken");
// const ExpressError= require("../helpers/expressError");
// const {
//   requireLogin,
//   requireAdmin,
//   authUser
// } = require("./auth");


// const { SECRET_KEY } = require("../config");
// const testJwt = jwt.sign({ username: "test", admin: false }, SECRET_KEY);
// const badJwt = jwt.sign({ username: "test1", admin: false }, "wrong");


// describe("ensureLoggedIn", function () {
//   test("works", function () {
//     expect.assertions(1);
//     const req = {curr_username: "test"};
//     const res = {};
//     const next = function (err) {
//       expect(err).toBeFalsy();
//     };
//     requireLogin(req, res, next);
//   });

//   test("unauth if no login", function () {
//     expect.assertions(1);
//     const req = {curr_username:{}};
//     const res = {};
//     const next = function (err) {
//         console.log(err)
//       expect(err["status"]).toBe(401);
//       expect(err["message"]).toEqual("Unauthorized");
//     };
//     requireLogin(req, res, next);
//   });
// });


