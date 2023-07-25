import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser"
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
mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!")
});



app.get('/users', (req, res) => {
  res.send("hello first request!")
})

//middlewares
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/gear", gearRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500
  const errorMessage = err.message || "Something went wrong "
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack
  })
})


const PORT = process.env.PORT || 8800;

app.listen(PORT, () => {
  connect()
  console.log(`Server listening on ${PORT} for backend`);
});