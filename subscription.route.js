import {Router} from "express";

const subscriptionRouter = Router();

subscriptionRouter.get('/',(req,res)=> res.send({text:"Get all subscriptions"}))
subscriptionRouter.get('/:id',(req,res)=> res.send({text:"Get subscription of a user"}))
subscriptionRouter.post('/',(req,res)=> res.send({text:"Add a subscriptions"}))
subscriptionRouter.put('/:id',(req,res)=> res.send({text:"Update a user subscription"}))
subscriptionRouter.delete('/:id',(req,res)=> res.send({text:"Delete a user subscription"}))
subscriptionRouter.get('/user/:id',(req,res)=> res.send({text:"Get all user subscriptions"}))
subscriptionRouter.put('/:id/cancel',(req,res)=> res.send({text:"Cancel subscription"}))
subscriptionRouter.get('/upcoming-renewals',(req,res)=> res.send({text:"Get upcoming renewals"}))



export default subscriptionRouter;