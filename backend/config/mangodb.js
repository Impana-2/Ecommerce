import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("MongoDB Connected");
    
  });
  await mongoose.connect(`${process.env.MANGODB_URI}/Chiguru`, );
};

export default connectDB;

