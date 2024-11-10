import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectMongodb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error connecting MongoDb: ${error.message}`);
    process.exit(1);
  }
};

export default connectMongodb;
