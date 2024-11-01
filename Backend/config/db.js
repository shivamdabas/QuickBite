import mongoose, { mongo } from "mongoose";

//Add Your Mongo Url Here 
const mongoURL ="";

export const connectDB = async () => {
    await mongoose.connect(`${mongoURL}`).then(()=>console.log("DB Connected"));
}