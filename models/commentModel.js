const mongoose = require("mongoose")

//route handler
const commentSchema = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,  //means ye id type ka hoga 
        ref: "Post" //by this we say which model it will be refering
    },
    user: {
        type: String,
        require:true
    },
    body:{
        type: String,
        require: true
    }
})

module.exports = mongoose.model("Comment", commentSchema)