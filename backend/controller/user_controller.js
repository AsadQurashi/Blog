import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { Token } from '../Model/Token.js';
import User from "../Model/user_schema.js";

// Accessing env file
dotenv.config();

export const signup = async (request, response) => {
  try {
    const hashpassword = await bcrypt.hash(request.body.password, 10);
    const hash_confirmpassword = await bcrypt.hash(request.body.confirm_password, 10);
    const gotUserData = {
      name: request.body.name,
      lastname: request.body.lastname,
      username: request.body.username,
      email: request.body.email,
      phone_no: request.body.phone_no,
      password: hashpassword,
      confirm_password: hash_confirmpassword
    };
    const newUser = new User(gotUserData);
    await newUser.save();
    return response.status(200).json({ msg: "Signup successful" });
  } catch (error) {
    return response.status(500).json({ msg: "Error while Signup" });
  }
};

// Login
export const login = async (request, response) => {
  const specific_user = await User.findOne({ email: request.body.email });
  if (!specific_user) {
    return response.status(400).json({ msg: "User doesn't match" });
  }
  try {
    const password_match = await bcrypt.compare(request.body.password, specific_user.password);
    if (password_match) {
      let accessToken = jwt.sign(specific_user.toJSON(), process.env.Access_Secret_Key, { expiresIn: '15m' });
      let refreshToken = jwt.sign(specific_user.toJSON(), process.env.Refresh_Secret_Key);

      const newToken = new Token({ token: refreshToken });
      await newToken.save();
      return response.status(200).json({ accessToken: accessToken, refreshToken: refreshToken, email: specific_user.email, username: specific_user.username });
    } else {
      return response.status(400).json({ msg: 'Invalid Password' });
    }
  } catch (error) {
    console.log("Error in backend of login function", error);
    return response.status(500).json({ msg: "Error while logging in" });
  }
};
