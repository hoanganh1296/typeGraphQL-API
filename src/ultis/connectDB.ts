import mongoose from "mongoose";
import config from "config"

const dbURI = config.get<string>("dbUri")

async function connectDB(){
    try {
        await mongoose.connect(dbURI);
        console.log('? Database connected successfully');
      } catch (error: any) {
        console.log(error.message);
        setTimeout(connectDB, 5000);
      }
}

export default connectDB;
