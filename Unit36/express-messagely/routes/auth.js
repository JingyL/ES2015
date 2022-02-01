const express = require("express");

const User = require("../models/user");

const router = new express.Router();
const ExpressError = require("../expressError");
const db = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { BCRYPT_WORK_FACTOR, SECRET_KEY } = require("../config");
const { authenticateJWT, ensureLoggedIn, ensureCorrectUser } = require("../middleware/auth");

/** POST /register - register user: registers, logs in, and returns token.
 *
 * {username, password, first_name, last_name, phone} => {token}.
 *
 *  Make sure to update their last-login!
 */
 router.post('/register', async (req, res, next) => {
    try{
        const { username, password, first_name, last_name, phone } = req.body;
        if (!username || !password || !first_name || !last_name || !phone) {
          throw new ExpressError("All info required", 400);
        }
        let result = await User.register(username, password, first_name, last_name, phone )
        let token = jwt.sign(result.username, SECRET_KEY);
        User.updateLoginTimestamp(User);
        return res.json({token});
    }catch(e){
        return next(e)
    }
 })


/** POST /login - login: {username, password} => {token}
 *
 * Make sure to update their last-login!
 *
 **/ 
router.post('/login', async (req, res, next) => {
    try{
        const { username, password} = req.body;
        if (!username || !password ) {
          throw new ExpressError("All info required", 400);
        }
        const auth = await User.authenticate(username, password)
        if (auth){
            let token = jwt.sign({ username }, SECRET_KEY);
            User.updateLoginTimestamp(username);
            return res.json({ message: `Logged in!`, token })
        }
        throw new ExpressError("Invalid username/password", 400);
    }catch(e){
        return next(e)
    }
})

module.exports = router;