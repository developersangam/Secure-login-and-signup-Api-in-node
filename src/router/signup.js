const express = require('express')
const signupRouter = express.Router()
const {createUser} = require('../controller/signup')
const validator = require("../middleware/validator")

signupRouter.post('/signup',validator,createUser)

module.exports = signupRouter