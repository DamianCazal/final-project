const express = require("express")
const routerAuth = express.Router()
const { showAuthFormSignup, signup, showAuthFormSignin, signin, logout } = require("../controllers/auth")

routerAuth.get('/auth/signup', showAuthFormSignup)
routerAuth.post('/auth/signup', signup)

routerAuth.get('/auth/signin', showAuthFormSignin)
routerAuth.post('/auth/signin', signin)

routerAuth.get('/auth/logout', logout)

module.exports = routerAuth;