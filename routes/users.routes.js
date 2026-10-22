import {Router} from 'express'
import { getUser, getUsers } from '../controllers/user.controller.js';
import authorize from '../middleware/auth.middeleware.js';

const userRouter=Router()

userRouter.get('/',getUsers);

userRouter.get('/:id',authorize,getUser);


userRouter.post('/',(req,res)=>{
  res.send({"title" : "Create new users"})
});
userRouter.put('/:id',(req,res)=>{
  res.send({"title" : "Update users"})
});
userRouter.delete('/:id',(req,res)=>{
  res.send({"title" : "Delete user"})
});

export default userRouter