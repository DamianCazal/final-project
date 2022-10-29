const express = require('express')
const routerPosts = express.Router()
const { getPosts, showPost, deletePost, newPost, createPost } = require('../Controllers/posts')

routerPosts.get("/posts", getPosts)
routerPosts.get("/posts/new", newPost)
routerPosts.get("/posts/:slug", showPost)
routerPosts.delete("/posts/:id", deletePost)

routerPosts.post("/posts", createPost)


module.exports = {
  routerPosts
}