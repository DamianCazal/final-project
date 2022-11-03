const Posts = require("../models/posts")

const getIndex = async (req, res) => {
  const title = "Blog Proyecto"
  const post = await Posts.find({}).lean()
  res.render('index', {
    post,
    title
  })
}

module.exports = {
  getIndex
}