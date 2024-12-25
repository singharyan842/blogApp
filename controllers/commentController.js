
//import model
const Post = require("../models/postModel")
const Comment = require("../models/commentModel")


//Buiseness logic
exports.createComment = async(req,res) => {
    try{
        //fetch data from request body -> post ki id, user jo comment krega, comment ki body
        const {post, user, body} = req.body
        
        //create comment object
        const comment = new Comment({post, user, body})

       //whenever we insert a new entry in "DB" we used "create" method but now we will use "save"
       const savedComment = await comment.save()

       //if we get a new comment that "comment id" should get stored in "postController" Array
       //1st find that post and then update the new comment id in the comment ids array
       //we use await because we are doing DB interaction
       const updatedPost = await Post.findByIdAndUpdate(post, {$push: {comments: savedComment._id}}, {new: true})
                           .populate("comments") //populate the comment array with comment document
                           .exec();
                           
       res.json({
        post: updatedPost,
       })
    }
    catch(err){
       return res.status(500).json({
        error: "Error while creating comment"
       })
    }
}