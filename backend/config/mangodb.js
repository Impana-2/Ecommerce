import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("DB Connected in MongoDB Atlas");
    
  });
  await mongoose.connect(`${process.env.MANGODB_URI}/Chiguru`, );
};

export default connectDB;

