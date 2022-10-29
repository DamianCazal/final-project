const Post = require("../Models/posts");

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find({}).lean()
    const title = "Lista de posts"
    res.render('index',{
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
    res.render('new', {})
  } catch (error) {
    
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
    
  } catch (error) {
    
  }
}


module.exports = {
  getPosts,
  showPost,
  deletePost,
  newPost,
  createPost
}