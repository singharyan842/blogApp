const mongoose = require("mongoose")

//route handler
const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },


    //In this we have arrays of like ids
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Like"
    }],

    //In this we have Arrays of comment ids
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }]
})

module.exports = mongoose.model("Post", postSchema)