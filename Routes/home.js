const express = require('express')
const { getHome } = require('../controllers/home')
const routerHome = express.Router()

routerHome.get('/', getHome)

module.exports = routerHome;