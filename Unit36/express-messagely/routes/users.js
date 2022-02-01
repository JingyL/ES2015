const express = require("express");

const User = require("../models/user");
const Message = require("../models/message");
const router = new express.Router();
const ExpressError = require("../expressError");
const db = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { BCRYPT_WORK_FACTOR, SECRET_KEY } = require("../config");
const { authenticateJWT, ensureLoggedIn, ensureCorrectUser } = require("../middleware/auth");

/** GET / - get list of users.
 *
 * => {users: [{username, first_name, last_name, phone}, ...]}
 *
 **/

 router.get('/', async (req, res, next) => {
    try {
        const all_users = await User.all();
        return res.json(all_users);
      } catch (err) {
        return next(err);
      }
})

/** GET /:username - get detail of users.
 *
 * => {user: {username, first_name, last_name, phone, join_at, last_login_at}}
 *
 **/

 router.get('/:username', async (req, res, next) => {
    try {
        // console.log(req.query.username)
        const user = await User.get(req.params.username);
        return res.json(user);
      } catch (err) {
        return next(err);
      }
})

/** GET /:username/to - get messages to user
 *
 * => {messages: [{id,
 *                 body,
 *                 sent_at,
 *                 read_at,
 *                 from_user: {username, first_name, last_name, phone}}, ...]}
 *
 **/

 router.get('/:username/to', async (req, res, next) => {
    try {
        const m = await User.messagesTo(req.params.username);
        return res.json(m);
      } catch (err) {
        return next(err);
      }
})


/** GET /:username/from - get messages from user
 *
 * => {messages: [{id,
 *                 body,
 *                 sent_at,
 *                 read_at,
 *                 to_user: {username, first_name, last_name, phone}}, ...]}
 *
 **/
 router.get('/:username/from', async (req, res, next) => {
    try {
        const m = await User.messagesFrom(req.params.username);
        return res.json(m);
      } catch (err) {
        return next(err);
      }
})

 module.exports = router;