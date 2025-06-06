import express from 'express';
import {PORT} from './config/env.js'
import authRouter from './auth.route.js';
import subscriptionRouter from './subscription.route.js';
import userRouter from './user.route.js';
import connectToDatabase from './Database/mongodb.js';
import errorMiddleware from './middlewares/error.middleware.js';
import cookieParser from 'cookie-parser';
const app=express();

app.use(express.json());   //to handle json request
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())
app.use('/api/v1/auth',authRouter);
app.use('/api/v1/users',userRouter);
app.use('/api/v1/subscriptions',subscriptionRouter);
app.use(errorMiddleware)

app.get('/',(req,res)=>{
    res.send("Welcome to the subscription tracker api",)    
})


app.listen(PORT,async()=>{
    console.log(`Api running on http://localhost:${PORT}`);
    await connectToDatabase();
})