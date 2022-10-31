const express = require('express')
const routerPosts = express.Router()
const { viewPosts, showPost, deletePost, viewFormNewPost, createPost, putPost, editPost} = require('../controllers/posts')

routerPosts.get("/posts", viewPosts)//vista de todos los post
routerPosts.get("/posts/new", viewFormNewPost)// vista del form post para crear un nuevo post
//TODO:Terminar de hacer el editar post
routerPosts.get("/posts/edit/:id", editPost)//vista del form para editar un post
routerPosts.get("/posts/:slug", showPost)//vista de un post en particular

routerPosts.post("/posts", createPost)// en esta ruta se va a guardar el post nuevo en la base de datos

routerPosts.delete("/posts/:id", deletePost)//en esta ruta se va borrar un post

routerPosts.put("/posts/:id", putPost)//en esta ruta se va a modificar un post

module.exports = {
  routerPosts
}