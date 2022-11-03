const express = require('express')
const routerPosts = express.Router()
const { viewPosts, showPost, deletePost, viewFormNewPost, createPost, putPost, editPost} = require('../controllers/posts')
const isAuthenticated = require('../middlewares/isauthenticated')
const multer = require('multer')

//configuracion de multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, `${file.originalname}`)
  }
})

const upload = multer({storage})


routerPosts.get("/posts", isAuthenticated, viewPosts)//vista de todos los post
routerPosts.get("/posts/new", isAuthenticated, viewFormNewPost)// vista del form post para crear un nuevo post
//TODO:arreglar el tema del value que no se ve completo al editar un post
routerPosts.get("/posts/edit/:id", isAuthenticated, editPost)//vista del form para editar un post
routerPosts.get("/posts/:slug", isAuthenticated, showPost)//vista de un post en particular

routerPosts.post("/posts", isAuthenticated, upload.single('archivo') , createPost)// en esta ruta se va a guardar el post nuevo en la base de datos

routerPosts.delete("/posts/:id", isAuthenticated, deletePost)//en esta ruta se va borrar un post

routerPosts.put("/posts/:id", isAuthenticated, upload.single('archivo'), putPost)//en esta ruta se va a modificar un post

module.exports = {
  routerPosts
}