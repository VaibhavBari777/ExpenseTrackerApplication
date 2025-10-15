const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')
const colors = require('colors')
const cors = require('cors')

const connectDb = require("./config/connectDb")

dotenv.config()

//call Db
connectDb()
const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())
// routes
// app.get('/', (req,res)=>{
//     res.send("<h1>Hello from server</h1>")

// })
app.use('/api/v1/user' , require('./routes/userRoute'))

// transcation routes
//  Correct
app.use('/api/v1/transaction', require('./routes/transactionRoute'))

const PORT = process.env.PORT || 8080
app.listen(PORT , ()=>{
    console.log(`Server runnning on ${PORT}`)
})

//pass : NFqFgyi2buUAb2QR

//pass2 : yHQsGahNmOa1yHSr

// mongodb+srv://vaibhavbari999:yHQsGahNmOa1yHSr@cluster0.0orfxav.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0