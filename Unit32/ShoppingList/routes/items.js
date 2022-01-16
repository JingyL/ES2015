const express = require("express")
const router = new express.Router()
const ExpressError = require("../expressError")
const items = require("../fakeDb")

router.get("/", function (req, res) {
    try {
        return res.json({ items});
      } catch(err){
        return next(err)
      }
  })

router.post("/", function (req, res,next) {
    try {
        if (!req.body.name && !req.body.price){
            throw new ExpressError("name and price is required", 400)
        }else if (req.body.name && !req.body.price){
            throw new ExpressError("price is required", 400)
        }else if (!req.body.name && req.body.price){
            throw new ExpressError("name is required", 400)
        }
        console.log(req.body.name)
        let newItem = { name: `${req.body.name}`, price: `${req.body.price}`}
        items.push(newItem)
        console.log(newItem)
        return res.status(201).json({ added: newItem })
      } catch (e) {
        return next(e)
      }

  })

router.get("/:name", function (req, res, next) {
    const foundItems = items.find(item => item.name === req.params.name)
    if (foundItems === undefined) {
      throw new ExpressError("item not found", 404)
    }
    res.json({ item: foundItems })
  })


router.patch("/:name", function (req, res, next) {
    const foundItems = items.find(item => item.name === req.params.name)
    if (foundItems === undefined) {
      throw new ExpressError("item not found", 404)
    }
    foundItems.name = req.body.name
    foundItems.price = req.body.price
    res.json({ item: foundItems })
  })
  
router.delete("/:name", function (req, res, next) {
    const foundIndx = items.findIndex(item => item.name === req.params.name)
    const foundItems = items.find(item => item.name === req.params.name)
    console.log(foundIndx)
    if (foundIndx === -1) {
      throw new ExpressError("item not found", 404)
    }
    items.splice(foundIndx, 1)
    res.json({ message: "Deleted" })
  })

module.exports = router;