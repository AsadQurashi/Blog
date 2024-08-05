import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  lastname: {
    type: String,
    require: false,
  },
  username: {
    type: String,
    require: true,
    unique: true,
  },
  phone_no: {
    type: Number,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  confirm_password: {
    type: String,
    require: true,
  },
});

const User = mongoose.model('user', UserSchema);
export default User;
