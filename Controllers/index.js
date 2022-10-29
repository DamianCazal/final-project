const { generatePost } = require("../Helpers/posts")
const { status } = require("../Models")

const getRootController = (req, res) => {
  res.send(status)
}

module.exports = {
  getRootController
}