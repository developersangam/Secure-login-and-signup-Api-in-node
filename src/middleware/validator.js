const Joi = require("joi")
const { Schema } = require("mongoose")

const validator = async (req,res,next) => {
    const resgisrationSchema = Joi.object({
        firstname: Joi.string()
        .min(3)
        .max(15)
        .required(),
        lastname:Joi.string().min(3).max(15).required(),
        email: Joi.string().email({tlds: { allow: ['com', 'net'] } }).required(),
        gender : Joi.string().required(),
        phone: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
        confirmpassword:Joi.ref('password')
    })
    try{
        const value = await resgisrationSchema.validateAsync(req.body) 
        console.log(value)
        if(!value){
            res.status(400).send({errorMsg:"You have not entered all field correctly"})
        }
        next()
    }
    catch(err){
        res.status(400).send({errorMsg:"You have not entered all field correctly",err})
    }
    
}

module.exports = validator