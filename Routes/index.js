const express = require('express')
const { getRootController } = require('../Controllers')
const routerIndex = express.Router()

routerIndex.get('/', getRootController)

module.exports = routerIndex