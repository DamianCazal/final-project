const express = require('express')
const { generatePost } = require('../helpers/posts')
const routerDev = express.Router()
const Post = require('../models/posts')

//TODO: Separar por capas esta parte y separa su controlador
routerDev.get("/db/fresh", async (req, res) => {
  try {
    const posts = await Post.deleteMany()
    for (let i = 0; i < 20; i++) {
      const nuevoPost = generatePost()
      const post = new Post(nuevoPost)
      await post.save()        
    }
    res.send("Todo OK")
  } catch (error) {
    console.log(error);
    res.send("Paso un error")
  }
})

module.exports = {
  routerDev
}