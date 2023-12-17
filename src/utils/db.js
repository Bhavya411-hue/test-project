import mongoose from "mongoose";
import { config } from "./config";
export const connectDb = async ()=>{
    try {
        await mongoose.connect(config.dnUrl);
        console.log('db connected');
    } catch (error) {
        console.log("db is not connected");
    }
}