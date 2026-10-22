import {Router} from 'express'
import authorize from '../middleware/auth.middeleware.js';
import { createSubscription, getUserSubscriptions,getWorkflowStatus } from '../controllers/subscription.controller.js';

const subscriptionRouter=Router();

subscriptionRouter.get('/',(req,res)=>{
    res.send("GET all subscriptions");
})

subscriptionRouter.get('/:id',getUserSubscriptions)

subscriptionRouter.post('/',authorize, createSubscription)

subscriptionRouter.put('/:id',(req,res)=>{
    res.send("UPDATE subscriptions");
})

subscriptionRouter.delete('/',(req,res)=>{
    res.send("DELETE subscriptions");
})

subscriptionRouter.put('/;id/cancel',(req,res)=>{
    res.send("CANCEL subscriptions");
})

subscriptionRouter.get('/upcoming-renewals',(req,res)=>{
    res.send("GET upcoming renewals");
})



subscriptionRouter.get('/workflow/:workflowRunId', getWorkflowStatus);

export default subscriptionRouter