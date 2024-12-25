const express = require("express")
const app = express()

//load the configuration for PORT
require("dotenv").config()
const PORT = process.env.PORT || 4000

//middleware
//it converts the raw json data given by user to js object and so app can understand 
//And when data goes to get stored in DB the "database driver" convert the js object to json 
app.use(express.json());

//import all the routes
const blog = require("./routes/blog")
//mount the routes
app.use("/api/v1", blog)


//fetch the database for connectiom
const connectWithDb = require("./config/database")
connectWithDb()


//start the server
app.listen(PORT, () => {
    console.log(`App is started at port no ${PORT}`)
})

app.get("/", (req, res) => {
    res.send(`<h1>This is homepage baby</h1>`)
})