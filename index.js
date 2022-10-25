const express = require('express')
const dotenv = require('dotenv')
const db = require('./db/db')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const authRoute = require('./router/auths')
const multerError = require('./rules/handleError')

// const control = require('./rules/imageValidation')
const app = express()



const corsOption = {
    origin: "*",
    credentials: true,
    credentials: true,
    optionSuccessStatus:200,
}
app.use(cors(corsOption))

// ALLOW COOKIES
app.use(cookieParser())


// enable secure credentials
dotenv.config()

// parse application/json
app.use(express.json())


app.use('/uploads',  express.static('./uploads'))


app.use('/api/user',  authRoute)


db.authenticate().then((res)=> console.log('Connection has been established successfully.')
).catch((err) => console.error('Unable to connect to the database:', err));

app.use(multerError)


app.listen(process.env.LOCAL_PORT, console.log("Connection started at", process.env.LOCAL_PORT));
