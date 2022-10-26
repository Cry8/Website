const Joi = require('joi')


const AdminRegValidation = (data) => {


    const schema = Joi.object().keys({
        username: Joi.string().min(6).required(),
        password: Joi.string().min(6).required(),
        twitter: Joi.string(),
        facebook: Joi.string().allow('').optional(),
        medium: Joi.string(),
        role: Joi.string().required()
    })

    // VALIDATE ADMIN USERS INPUT DATA
    return schema.validate(data)
}


const PostValidation = (data) => {

    const schema = Joi.object().keys({
        topic: Joi.string().required(),
        contents: Joi.string().required(),
        category: Joi.string().required(),
        image: Joi.string().allow('').optional(),
        tags: Joi.string().required(),
        postedBy: Joi.string().required(),
        likes: Joi.string().allow('').optional(),
        dislike: Joi.string().allow('').optional()
    })

    // VALIDATE ADMIN USERS INPUT DATA
    return schema.validate(data)
}



const BucketValidation = (data) => {


    const schema = Joi.object().keys({
        wordPhrase: Joi.string().required(),
        contents: Joi.string().required(),
    })

    // VALIDATE dictionary INPUT DATA
    return schema.validate(data)
}



const LoginValidation = (data) => {
    const schema = Joi.object().keys({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    })

    // VALIDATE USER INPUT DATA
    return schema.validate(data)
}

const CouponValidation = (data) => {


    const schema = Joi.object().keys({
        code: Joi.string().min(9).max(10).required(),
        status: Joi.optional(),
    })

    // VALIDATE dictionary INPUT DATA
    return schema.validate(data)
}


 
module.exports = { LoginValidation, AdminRegValidation , PostValidation, BucketValidation, CouponValidation}