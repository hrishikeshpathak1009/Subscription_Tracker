import express from 'express';
import cookieParser from 'cookie-parser';


import {PORT} from './config/env.js';
import userRouter from './routes/users.routes.js';
import authRouter from './routes/auth.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';
import connectToDatabase from './databse/mongodb.js';
import errorMiddleware from './middleware/error.middleware.js';
import arcjetMiddleware from './middleware/arcject.middleware.js';
import workflowRouter from './routes/workflow.routes.js';




const app= express();

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cookieParser());
app.use(arcjetMiddleware)

app.use('/api/v1/user',userRouter)
app.use('/api/v1/auth',authRouter)
app.use('/api/v1/subscription',subscriptionRouter)
app.use('/api/v1/workflow',workflowRouter)

app.use(errorMiddleware);

app.get('/',(req,res)=>{
    res.send("This subscription tracker is built by Hrishikesh Pathak");
});

app.listen(PORT,async ()=>{

    console.log("server running on port 3000");
    connectToDatabase()
});


export default app;