const express = require('express');
const Operator = require('./helper');
const ExpressError = require('./expressError')
const app = express();

app.get("/mean", function (req, res, next) {
    // let nums = new Operator(req.query.nums)
    // res.send(`${nums.mean()}`)
    try {
        if (!req.query.nums) throw new ExpressError("Not Available", 404)
        let nums = new Operator(req.query.nums)
        let result = nums.mean()
        if (!result) {
            throw new ExpressError("Not Available result");
          }
        return res.send(`{operator: "mean", 
                        result: ${result}}`)
      } catch (e) {
        next(e)
      }
  })

  app.get("/median", function (req, res, next) {
    // let nums = new Operator(req.query.nums)
    // res.send(`${nums.median()}`)


    try {
        if (!req.query.nums) throw new ExpressError("Not Available", 404)
        let nums = new Operator(req.query.nums)
        let result = nums.median() 
        if (!result) {
            throw new ExpressError("Not Available result");
          }
        return res.send(`{operator: "median", 
                        result: ${nums.median()}}`)
      } catch (e) {
        next(e)
      }
  })

  app.get("/mode", function (req, res, next) {
    // let nums = new Operator(req.query.nums)
    // res.send(`${nums.mode()}`)

    try {
        if (!req.query.nums) throw new ExpressError("Not Available", 404)
        let nums = new Operator(req.query.nums)
        let result = nums.median() 
        if (!result) {
            throw new ExpressError("Not Available result");
          }
        return res.send(`{operator: "mode", 
                        result: ${nums.mode()}}`)
      } catch (e) {
        next(e)
      }
  })


// Error handler
app.use(function (err, req, res, next) { //Note the 4 parameters!
    // the default status is 500 Internal Server Error
    let status = err.status || 500;
    let message = err.msg;
  
    // set the status and alert the user
    return res.status(status).json({
      error: { message, status }
    });
  });

app.listen(3000, () => {
    console.log("Server running on port 3000")
  });
  