import express from "express"
import dotenv from "dotenv";
import cors from "cors";
import connectMongodb from "./db/connectMongodb.js";
import  authRoutes from "./routes/auth.routes.js"
dotenv.config()
const app=express()
app.use(cors())
app.use(express.json());
const PORT=process.env.PORT||5000
app.use("/api/auth",authRoutes);

app.listen(PORT,()=>{
    console.log(`Server is listening on the port ${PORT}`)
    connectMongodb();
})