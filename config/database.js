const mongoose = require("mongoose");

//jo bhi apke dotenv file ke andar configuration hai wo load ho jata hai processwale object ke andar
require("dotenv").config()

const connectWithDb = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(() => {console.log("DB connection is successful")})
    .catch((error) => {
        console.log("issue in DB Connection")
        console.error(error.message)
        //iska kya matlab hota hai?
        process.exit(1)
    })
}

module.exports = connectWithDb