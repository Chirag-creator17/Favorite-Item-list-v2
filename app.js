import express from 'express';
const app = express();
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
app.use(cookieParser());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/favoriteDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongo connected.."))
  .catch((err) => console.log("mongo connection error: ", err));

const userRouter = require('./routes/User');
app.use('/user',userRouter);

app.listen(5000,()=>{
    console.log('express server started');
});
