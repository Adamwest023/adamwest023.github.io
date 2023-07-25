import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import userRoute from "./routes/users.js"
import gearRoute from "./routes/gear.js"

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



app.get('/users', (req,res) => {
  res.send("hello first request!")
})

//middlewares
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/gear", gearRoute);



const PORT = process.env.PORT || 8800;

app.listen(PORT, () => {
  connect()
  console.log(`Server listening on ${PORT} for backend`);
});