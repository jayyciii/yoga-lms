import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js'
import { clerkWebhooks } from './controllers/webhook.js'
import educatorRouter from './routes/educatorRoutes.js'
import { clerkMiddleware } from '@clerk/express'

//khoi tao express
const app = express()

//ket noi voi database
await connectDB()


//middleware
app.use(cors())
app.use(clerkMiddleware())


//route
app.get('/', (req,res) => res.send("API dang chay"))

app.post('/clerk', express.json(), clerkWebhooks)

app.use('/api/educator', express.json(), educatorRouter)

//port
const PORT = process.env.PORT || 4000

app.listen(PORT, ()=>{
    console.log(`Server dang hoat dong ${PORT}`)
})