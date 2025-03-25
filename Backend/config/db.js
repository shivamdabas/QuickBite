import mongoose, { mongo } from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://root:admin@cluster0.g1z21.mongodb.net/QuickBite').then(()=>console.log("DB Connected"));
}

