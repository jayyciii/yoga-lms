import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js'
import { clerkWebhooks, stripeWebhooks } from './controllers/webhook.js'
import educatorRouter from './routes/educatorRoutes.js'
import { clerkMiddleware } from '@clerk/express'
import connectCloudinary from './configs/cloudinary.js'
import courseRouter from './routes/courseRoute.js'
import userRouter from './routes/userRoutes.js'

//khoi tao express
const app = express()

//ket noi voi database
await connectDB()
await connectCloudinary()


//middleware
app.use(cors())
app.use(clerkMiddleware())



//route
app.get('/', (req,res) => res.send("API dang chay"))

app.post('/clerk', express.json(), clerkWebhooks)

app.use('/api/educator',express.json(), educatorRouter)

app.use('/api/course',express.json(), courseRouter)

app.use('/api/user',express.json(), userRouter)

app.post('/stripe',express.raw({type:'application/json'}),stripeWebhooks)

//port
const PORT = process.env.PORT || 4000

app.listen(PORT, ()=>{
    console.log(`Server dang hoat dong ${PORT}`)
})