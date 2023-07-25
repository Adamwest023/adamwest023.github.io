import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
  } catch (error) {
    throw error;
  }
}

//if connection to MongoDB is broken
mongoose.connection.on("disconnected",()=>{
  console.log("mongoDB disconnected!")
});
mongoose.connection.on("connected",()=>{
  console.log("mongoDB  connected!")
})



const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  connect()
  console.log(`Server listening on ${PORT} for backend`);
});