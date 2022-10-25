const router = require('express').Router();
const AdminUser = require('../models/AdminUser.js')
const WordsBucket = require('../models/WordsBucket.js')
const Posts = require('../models/Posts.js')
const { PostValidation, AdminRegValidation, BucketValidation } = require('../rules/validation')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const upload  = require('../rules/imageValidation')



// MAKE POSTS
router.post('/posts', upload,  async (req, res) => {

    // error message check
    const { value, error } = PostValidation(req.body)

    if (error) {
        return res.send(error.details[0].message)
    }

    const {topic, contents, category, tags,postedBy,likes,dislikes}  = req.body
    
    
    //username duplicate check 
    const topicCheck = await Posts.findOne({
        where: { topic}
    })
    if(topicCheck) return res.json({"error": "Topic  already Exists"})


    // send and save info - database
    const postMe = await Posts.create({
        topic,
        contents,
        category,
        image: req.file.path,
        tags,
        postedBy,
    }).then((sendInfo) => {
        res.json({"data": sendInfo })
    }).catch((err) => {
        res.status(400).send(err)
    })

})

router.get("/getAllPosts", (req, res) => 
 
    Posts.findAll().then((data) => res.json({"data" : data})).catch((err) => console.log(err))

);


// USERS
router.post('/register',  async (req, res) => {

    // error message check
    const { value, error } = AdminRegValidation(req.body)

    if (error) {
        return res.send(error.details[0].message)
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
        res.json({"data": userInfo})
    }).catch((err) => {
        res.status(400).send(err)
    })

})

router.get("/getAllAdmin", (req, res) => 
 
AdminUser.findAll().then((data) => res.json({"data":data})).catch((err) => console.log(err))

);




// DICTIONARY
router.post('/bucket',  async (req, res) => {

    // error message check
    const { value, error } = BucketValidation(req.body)

    if (error) {
        return res.send(error.details[0].message)
    }

    const {wordPhrase,contents}  = req.body


    //username duplicate check 
    const wordCheck = await WordsBucket.findOne({
        where: { wordPhrase}
    })
    if(wordCheck) return res.json({"error":"Word/Phrase already Exists"})

  
    // send and save info - database
    const postMe = await WordsBucket.create({
        wordPhrase,
        contents,
    }).then((userInfo) => {
        res.json({"data": userInfo})
    }).catch((err) => {
        res.status(400).send(err)
    })

})

router.get("/getAllBucket", (req, res) => 
 
WordsBucket.findAll().then((data) => res.json({"data":data})).catch((err) => console.log(err))

);







module.exports = router
