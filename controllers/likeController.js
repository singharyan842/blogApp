const Like = require("../models/likeModel")
const Post = require("../models/postModel")


exports.likePost = async(req,res) => {
    try{
        const {post, user} = req.body;

        const like = new Like({post, user})
    
        const savedLike = await like.save()

        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {likes:savedLike._id}}, {new: true}).populate("likes").exec()

        res.json({
            post: updatedPost
        })
    }
    catch(err){
        return res.status(500).json({
            error: "Error while liking post"
        })
    }
}


//unlike post
exports.unlikePost = async(req, res) => {
    try{
      //we are deleting from post array and like collection
      const {post, like} = req.body

      //deleting form like collection
      const deletedLike = await Like.findOneAndDelete({post: post, _id:like})

      //updated post 
      const updatedPost = await Post.findByIdAndUpdate(post, {$pull: {likes: deletedLike._id}}, {new: true})

      res.json({
        post: updatedPost
      })

    }
    catch(err){
        return res.status(500).json({
            error: "Error while unliking post"
        })
    }
}