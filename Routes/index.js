const express = require('express')
const { getIndex } = require('../controllers/index')
const routerIndex = express.Router()

routerIndex.get('/', getIndex)

module.exports = routerIndex;