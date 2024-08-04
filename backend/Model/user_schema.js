<<<<<<< HEAD
import mongoose, { Types } from "mongoose";
=======
import mongoose from "mongoose";
>>>>>>> b047c7af968c2defde288ca932b322a98c4a7fc4

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  lastname: {
    type: String,
    require: false,
  },
<<<<<<< HEAD
  username: {
    type: String,
    require: true,
    unique: true,
  },
=======
>>>>>>> b047c7af968c2defde288ca932b322a98c4a7fc4
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