import mongoose from "mongoose"

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://blog-application:XkGA7ZOboC4TAs7@cluster0.njjghgo.mongodb.net/')
    console.log("DB connected");
}
//XkGA7ZOboC4TAs7