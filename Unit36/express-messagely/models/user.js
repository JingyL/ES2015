const db = require("../db");
const bcrypt = require("bcrypt");
const ExpressError = require("../expressError");

const { BCRYPT_WORK_FACTOR, SECRET_KEY } = require("../config");

/** User class for message.ly */

/** User of the site. */

class User {

  constructor({ id, username, password, firstName, lastName, phone }) {
    this.id = id;
    this.username = username;
    this.password = password
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
  }
  /** register new user -- returns
   *    {username, password, first_name, last_name, phone}
   */

  static async register({username, password, first_name, last_name, phone}) {
    // hash password
    const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);
    // save to db
    const results = await db.query(`
      INSERT INTO users (username, password, first_name, last_name, phone,join_at,
        last_login_at)
      VALUES ($1, $2, $3, $4, $5, current_timestamp, current_timestamp)
      RETURNING username, password, first_name, last_name, phone`,
      [username, hashedPassword, first_name, last_name, phone]);
    
    return results.rows[0];
  }

  /** Authenticate: is this username/password valid? Returns boolean. */

  static async authenticate(username, password) {
    const results = await db.query(
      `SELECT username, password 
     FROM users
     WHERE username = $1`,
      [username]);
    const user = results.rows[0];
    if (user) {
      if (await bcrypt.compare(password, user.password)) {
        return true
      }
    }
    return false
  }
  /** Update last_login_at for user */

  static async updateLoginTimestamp(username) {
    const result = await db.query(
      `UPDATE users
         SET last_login_at = current_timestamp
         WHERE username = $1
         RETURNING username`,
      [username]);

    if (!result.rows[0]) {
      throw new ExpressError(`No such user: ${username}`, 404);
    }
  }

  /** All: basic info on all users:
   * [{username, first_name, last_name, phone}, ...] */

  static async all() {
    const results = await db.query(
      `SELECT username, first_name, last_name, phone
      FROM users
      ORDER BY username`);

    return results.rows;

  }
  /** Get: get user by username
   *
   * returns {username,
   *          first_name,
   *          last_name,
   *          phone,
   *          join_at,
   *          last_login_at } */

  static async get(username) {
    const results = await db.query(
      `SELECT username, first_name, last_name, phone, join_at, last_login_at
       FROM users
       WHERE username = $1`,
      [username]);
      console.log(results)
    return results.rows[0];
  }

  /** Return messages from this user.
   *
   * [{id, to_user, body, sent_at, read_at}]
   *
   * where to_user is
   *   {username, first_name, last_name, phone}
   */

  static async messagesFrom(username) {
    const results = await db.query(
      `SELECT m.id, u.username, u.first_name, u.last_name, u.phone, 
      m.body, m.sent_at, m.read_at
       FROM users as u
       JOIN messages as m
       ON m.to_username = u.username
       WHERE m.from_username = $1`,
      [username]);

    return results.rows.map(d => (
      {
        "id": d.id,
        "to_user": {
          "username": d.username,
          "first_name": d.first_name,
          "last_name": d.last_name,
          "phone": d.phone
        },
        "body": d.body,
        "sent_at": d.sent_at,
        "read_at": d.read_at
      }
    )
    )
    
  }

  /** Return messages to this user.
   *
   * [{id, from_user, body, sent_at, read_at}]
   *
   * where from_user is
   *   {username, first_name, last_name, phone}
   */

  static async messagesTo(username) {
    const results = await db.query(
      `SELECT m.id, u.username, u.first_name, u.last_name, u.phone, 
      m.body, m.sent_at, m.read_at
       FROM users as u
       JOIN messages as m
       ON m.from_username = u.username
       WHERE m.to_username = $1`,
      [username]);

    return results.rows.map(d => (
      {
        "id": d.id,
        "from_user": {
          "username": d.username,
          "first_name": d.first_name,
          "last_name": d.last_name,
          "phone": d.phone
        },
        "body": d.body,
        "sent_at": d.sent_at,
        "read_at": d.read_at
      }
    )
    )
    
  }
}


module.exports = User;