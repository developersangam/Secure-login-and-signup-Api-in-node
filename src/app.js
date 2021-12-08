const express = require('express')
require("./db/connection")
const app = express()
const signupRouter = require("./router/signup")

//constants
const port = 4000

// middleware
app.use(express.json())

// route
app.use(signupRouter)


app.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
})