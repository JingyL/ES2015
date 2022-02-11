BUG #1
  routes/auth.js line42 miss await

BUG #2
  routes/users.js line105 miss await


BUG #3
  models/user.js line117 miss throw


Not Sure
BUG #4
    middleware/auth.js change jwt.decode to jwt.verify(token, secret key)
    Don't know how to test it.