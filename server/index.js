import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors"
import postRoutes from "./routes/posts.js"
import dotenv from 'dotenv'

const app = express()
dotenv.config()


app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

// Connect to database
const CONNECTION_URL = process.env.CONNECTION_URL
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL)
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server listening at Port ${PORT}`)
    })
})
.catch((error) => {
    console.log(error.message)
})

app.get('/', (req,res)=>{
    res.json('This is Memories Project')
})
app.use('/posts', postRoutes)