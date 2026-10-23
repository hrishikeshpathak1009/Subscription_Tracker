import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors'

import {PORT} from './config/env.js';
import userRouter from './routes/users.routes.js';
import authRouter from './routes/auth.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';
import connectToDatabase from './databse/mongodb.js';
import errorMiddleware from './middleware/error.middleware.js';
import arcjetMiddleware from './middleware/arcject.middleware.js';
import workflowRouter from './routes/workflow.routes.js';




const app= express();

app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://subscriptiontracker-roan.vercel.app',
  ],
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));



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
const port = Number(PORT) || 3000;

await connectToDatabase();

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});

export default app;