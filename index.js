const express = require('express')
const dotenv = require('dotenv')
const db = require('./db/db')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const authRoute = require('./router/auths')
const multerError = require('./rules/handleError')

// const control = require('./rules/imageValidation')
const app = express()


// enable secure credentials
dotenv.config()

// parse application/json
app.use(express.json())

const corsOption = {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
    optionSuccessStatus:200,
}
app.use(cors(corsOption))


app.use(bodyParser.urlencoded({entended:true}))
// ALLOW COOKIES
app.use(cookieParser())





app.use('/uploads',  express.static('./uploads'))


app.use('/api/user',  authRoute)


db.authenticate().then((res)=> console.log('Connection has been established successfully.')
).catch((err) => console.error('Unable to connect to the database:', err));

app.use(multerError)


app.listen(process.env.LOCAL_PORT, console.log("Connection started at", process.env.LOCAL_PORT));
