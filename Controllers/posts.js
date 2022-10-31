const { slugify } = require("slugify");
const Post = require("../models/posts");

const viewPosts = async (req, res) => {
  try {
    const posts = await Post.find({}).lean()
    const title = "Lista de posts"
    res.render('posts',{
      title,
      posts
    })

  } catch (error) {
    console.log(error);
    res.send("error")
  }
}

const showPost = async (req, res) => {
  try {
    const post = await Post.findOne({slug: req.params.slug}).lean()
    if ( post === null ) res.redirect("/posts")

    res.render('show', 
      {
        title: `${post.title}`,
        post
      }
    )
  } catch (error) {
    console.log(error);
  }
}

const viewFormNewPost = async (req, res) => {
  try {
    res.render('new')
  } catch (error) {
    
  }
}
const editPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).lean()
    res.render('edit', {post})
  } catch (error) {
    console.log("error al editar");
  }
}

const deletePost = async (req, res) => {//controlador terminado
  try {
    await Post.findByIdAndDelete(req.params.id)
    res.redirect('/posts')
  } catch (error) {
    console.log(error);
  }
}

const createPost = async (req, res) => {//funciona
  try {
    let post = new Post()
    
    post.title = req.body.title,
    post.body = req.body.body
    post = await post.save()
    res.redirect(`/posts`)
  } catch (error) {
    console.log("error al crear el post");
  }
}

const putPost = async (req, res) => {
  try {
    const update = {
      title: req.body.title,
      body: req.body.body,
      slug: ((req.body.title).split(" ").join("-")).toLowerCase()
    }

    const post = await Post.findByIdAndUpdate(req.params.id, update).lean()
    
    res.redirect('/posts')
  } catch (error) {
    
  }
}


module.exports = {
  viewPosts,
  showPost,
  deletePost,
  viewFormNewPost,
  createPost,
  putPost,
  editPost
}