const Register = require("../models/signup")

const createUser = async (req,res) =>{
    var emailExist = await Register.findOne({email:{$eq:req.body.email}})
    var numExist = await Register.findOne({phone:{$eq:req.body.phone}})
    // console.log(emailExist,numExist)
    if(emailExist === null && numExist===null){
        try{
        if(req.body){
        const register = new Register(req.body)
        // console.log(register)
        const addUser = await register.save()
        // console.log(addUser)
        res.status(200).send({success:true,message:"Added successfully", data:addUser})
        }
        else{
            res.status(400).send({success:true,message:"provide all you details", data:{}})
        }
        }catch(err){
            res.status(400).send({success:true,message:"Something went wrong", data:{}})
        }
    }
    else {
        if(emailExist && numExist){
            res.status(400).send({success:true,message:"Email and number already exist", data:{}})
        }
        else if(numExist){
            res.status(400).send({success:true,message:"Number already exist", data:{}})
        }
        else{
            res.status(400).send({success:true,message:"Email already exist", data:{}})
        }
    }
}

module.exports = {createUser}