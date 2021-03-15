import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });
    console.log(`Mongodb Connected`);
  } catch (e) {
    console.log(e);
  }
};

export default connectDB;
