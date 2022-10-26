const router = require('express').Router();
const AdminUser = require('../models/AdminUser.js')
const WordsBucket = require('../models/WordsBucket.js')
const Posts = require('../models/Posts.js')
const Coupon = require('../models/Coupon.js')
const { PostValidation, AdminRegValidation, BucketValidation, CouponValidation } = require('../rules/validation')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const upload  = require('../rules/imageValidation')



// create code

router.post('/coupons',  async (req, res) => {

    // error message check
    const { value, error } = CouponValidation(req.body)

    if (error) {
        return res.status(202).send(error.details[0].message)
    }

    const {code}  = req.body


    //username duplicate check 
    const codeCheck = await Coupon.findOne({
        where: { code}
    })
    if(codeCheck) return res.status(202).send("This code already exist already Exists")

  
    // send and save info - database
    const postMe = await Coupon.create({
        code,
        status:false
    }).then((userInfo) => {
        res.status(200).send("Upload Successful")
    }).catch((err) => {
        res.status(400).send('I think something might be wrong with your internet connection')
    })

})
router.get("/getAllCodes", (req, res) => 
 
Coupon.findAll().then((data) => res.status(200).send(data)).catch((err) => res.status(202).send("Unable to fetch your requested data"))

);





// MAKE POSTS
router.post('/posts', upload,  async (req, res) => {

    // error message check
    const { value, error } = PostValidation(req.body)

    if (error) {
        return res.status(202).send(error.details[0].message)
    }

    const {topic, contents, category, tags,postedBy,likes,dislikes}  = req.body
    
    
    //username duplicate check 
    const topicCheck = await Posts.findOne({
        where: { topic}
    })
    if(topicCheck) return res.status(202).send("Topic  already Exists")


    // send and save info - database
    const postMe = await Posts.create({
        topic,
        contents,
        category,
        image: req.file.path,
        tags,
        postedBy,
    }).then((sendInfo) => {
        res.status(200).send("Upload Successful")
    }).catch((err) => {
        res.status(400).send('I think something might be wrong with your internet connection')
    })

})

router.get("/getAllPosts", (req, res) => 
 
    Posts.findAll().then((data) => res.status(200).send(data)).catch((err) => res.status(202).send("Unable to fetch your requested data"))

);


// USERS
router.post('/register',  async (req, res) => {

    // error message check
    const { value, error } = AdminRegValidation(req.body)

    if (error) {
        return res.status(202).send(error.details[0].message)
    }

    const {username,role, facebook}  = req.body


    //username duplicate check 
    const userCheck = await AdminUser.findOne({
        where: { username}
    })
    if(userCheck) return res.json({"error": "Username already Exists"})

    
    // encrypt the password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)


    // send and save info - database
    const postMe = await AdminUser.create({
        username,
        password:hashedPassword,
        facebook,
        role,
    }).then((userInfo) => {
        res.status(200).send("Upload Successful")
    }).catch((err) => {
        res.status(400).send('I think something might be wrong with your internet connection')
    })

})

router.get("/getAllAdmin", (req, res) => 
 
AdminUser.findAll().then((data) => res.status(200).send(data)).catch((err) => res.status(202).send("Unable to fetch your requested data"))

);




// DICTIONARY
router.post('/bucket',  async (req, res) => {

    // error message check
    const { value, error } = BucketValidation(req.body)

    if (error) {
        return res.status(202).send(error.details[0].message)
    }

    const {wordPhrase,contents}  = req.body


    //username duplicate check 
    const wordCheck = await WordsBucket.findOne({
        where: { wordPhrase}
    })
    if(wordCheck) return res.status(202).send("Word/Phrase already Exists")

  
    // send and save info - database
    const postMe = await WordsBucket.create({
        wordPhrase,
        contents,
    }).then((userInfo) => {
        res.status(200).send("Upload Successful")
    }).catch((err) => {
        res.status(400).send('I think something might be wrong with your internet connection')
    })

})

router.get("/getAllBucket", (req, res) => 
 
WordsBucket.findAll().then((data) => res.status(200).send(data)).catch((err) => res.status(202).send("Unable to fetch your requested data"))

);







module.exports = router
