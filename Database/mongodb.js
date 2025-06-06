import mongoose from 'mongoose';
import { NODE_ENV, DB_URI } from '../config/env.js';

if(!DB_URI){
    console.log("Pls add DB_URI in ../config/env.js");
}


const connectToDatabase= async()=>{
    try {
        await mongoose.connect(DB_URI);
        console.log(`Connected to database in ${NODE_ENV} mode`);
        
    } catch (error) {
        console.log("Error , failed to connect to the database", error);
        process.exit(1)
    }
}

export default connectToDatabase;