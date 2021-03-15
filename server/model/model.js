import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  gender: String,
  status: String,
});

const Userdb = mongoose.model("UserDb", Schema);

export default Userdb;
