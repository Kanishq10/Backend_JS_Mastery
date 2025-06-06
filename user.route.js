import { Router } from "express";
import { getUser, getUsers } from "./controllers/user.controller.js";
import {authorize} from "./middlewares/auth.middleware.js";
import { authorizeAdmin } from "./middlewares/admin.middleware.js";
const userRouter= Router();

userRouter.get('/', authorizeAdmin,getUsers)
userRouter.get('/:id',authorize, getUser)                                  //middleware , all should have next in it, can be chained
userRouter.post('/', (req, res)=> res.send({text:"Add a new user"}))
userRouter.put('/:id',(req,res)=> res.send({text:"update a user"}))
userRouter.delete('/:id',(req,res)=> res.send({text:"delete a user"}))

export default userRouter;