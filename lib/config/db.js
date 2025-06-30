import mongoose from "mongoose";

export const ConnectDB= async ()=>{
    await mongoose.connect('mongodb+srv://blog-app:Blog@cluster0.kpo6us1.mongodb.net/')
    console.log("MongoDB Connected Successfully");
}