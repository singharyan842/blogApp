const Post = require("../models/postModel")

exports.createPost = async(req,res) => {
    try{
     //So to create post there are 2 methods:
     //1st-> put create function on model
     //2nd-> create post object and save it

      //2nd method
      const {title, body} = req.body
      const post = new Post({title, body})

      const savedPost = await post.save();

      res.json({
        post: savedPost,
      })
    }
    catch(err){
       return res.status(400).json ({
        error: "Error while creating post"
       })
    }
}


//to get all post
exports.getAllPosts = async(req,res) => {
    try{
      const posts = await Post.find().populate("likes").populate("comments").exec()

      res.send({
        posts,
      })
    }
    catch(err){
       return res.status(400).json({
        error: "Error while fetching the post"
       })
    }
}