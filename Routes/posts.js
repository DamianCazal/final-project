const express = require('express')
const routerPosts = express.Router()
const { getPosts, showPost, deletePost, newPost, createPost, putPost, editPost} = require('../controllers/posts')

routerPosts.get("/posts", getPosts)
routerPosts.get("/posts/new", newPost)
//TODO:Terminar de hacer el editar post
routerPosts.get("/posts/edit/:id", editPost)
routerPosts.get("/posts/:slug", showPost)

routerPosts.post("/posts", createPost)

routerPosts.delete("/posts/:id", deletePost)

routerPosts.put("/posts/:id", putPost)

module.exports = {
  routerPosts
}