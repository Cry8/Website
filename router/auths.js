const router = require('express').Router();
const AdminUser = require('../models/AdminUser.js')
const WordsBucket = require('../models/WordsBucket.js')
const Posts = require('../models/Posts.js')
const Coupon = require('../models/Coupon.js')
const { PostValidation, AdminRegValidation, LoginValidation, BucketValidation, CouponValidation } = require('../rules/validation')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const upload  = require('../rules/imageValidation')
const dotenv  = require('dotenv');
const {validateToken} = require("../router/VerifyToken")
dotenv.config()



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
router.get("/getAllCodes", validateToken, (req, res) => 
 
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

    const {username,role, code}  = req.body


    //username duplicate check 
    const userCheck = await AdminUser.findOne({
        where: { username}
    })
    if(userCheck) return res.status(202).send("Username already Exists")

    //code existence check 
    const codeCheck = await Coupon.findOne({
        where: { code}
    })
    if(!codeCheck) return res.status(202).send("code doesnt exist")
    console.log("how far",codeCheck.status)

    if(codeCheck.status == 1) return res.status(202).send("This code has been used")

    
    // encrypt the password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)


    // update Code status
    const codeStatus = await Coupon.update(
        {status: 1},
        {where: { code}}
    )

    // send and save info - database
    const postMe = await AdminUser.create({
        username,
        password:hashedPassword,
        role,
    }).then((userInfo) => {
        res.status(200).send("Upload Successful")
    }).catch((err) => {
        res.status(400).send('I think something might be wrong with your internet connection')
    })

})

router.get("/getAllAdmin", validateToken ,(req, res) => 
 
AdminUser.findAll().then((data) => res.status(200).send(data)).catch((err) => res.status(202).send("Unable to fetch your requested data"))

);




// DICTIONARY
router.post('/bucket', validateToken,  async (req, res) => {

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


// LOGIN
router.post('/login', async (req, res, next) => {
    
    // error message check
    const { value, error } = LoginValidation(req.body)

    if (error) {
        return res.status(202).send(error.details[0].message)
    }


    const { username, password}  = req.body


    //Email duplucate check 
    const userCheck = await AdminUser.findOne({
        where: { username}
    })
    if(!userCheck) return res.status(202).send("username doesnt Exists")

    //  check Password 
    const passwordCheck = await bcrypt.compare(password, userCheck.password).then((result) => {
        if(!result) return res.status(202).send("Invalid Password")

        const giveToken = jwt.sign({
            id: userCheck.id,
            username: userCheck,
        }, process.env.COOKIE, {expiresIn: '1d' });

        

        const newCookie =  res.cookie("user", giveToken , {
                maxAge: 24 * 60 * 60 * 1000 ,
                path: '/',
                // httpOnly: true,
                // secure:true,
                // signed: true
            }
        )
 

        if(newCookie) {
            res.status(200).json({auth: true,loggedIn: true,cookie:req.cookies})
        } else {
            res.clearCookie('user')
            res.status(202).json({auth: false,loggedIn: false, cookie:'No cookies'})
        }
    })
 
 next()
});

router.get('/login', async (req, res, next) => {
    if(req.cookies.user) {
        res.status(202).json({auth: true,loggedIn: true,cookie:req.cookies.user})
     } else {
        res.clearCookie('user')
        res.status(202).json({auth: false,loggedIn: false, cookie:'No cookies'})
        res.end()
     }
     next()
})


 




module.exports = router
