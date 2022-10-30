const Post = require("../models/posts");

const getPosts = async (req, res) => {
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

const newPost = async (req, res) => {
  try {
    res.render('new')
  } catch (error) {
    
  }
}
const editPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).lean()

    res.render('edit', {
      title: "Editando el post",
      post
    })
  } catch (error) {
    console.log("error al editar");
  }
}

const deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id)
    res.redirect('/posts')
  } catch (error) {
    console.log(error);
  }
}

const createPost = async (req, res) => {
  try {
    let post = new Post()
    
      post.title = req.body.title,
      post.body = req.body.body
    
    post = await post.save()
    res.redirect(`/posts/${post.slug}`)
  } catch (error) {
    console.log("error al crear el post");
  }
}

const putPost = async (req, res) => {
  try {
    res.render('edit')
  } catch (error) {
    
  }
}


module.exports = {
  getPosts,
  showPost,
  deletePost,
  newPost,
  createPost,
  putPost,
  editPost
}