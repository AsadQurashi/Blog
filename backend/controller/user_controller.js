import User from "../Model/user_schema.js";

export const signup = async (request, response) => {
  try {
    const gotUserData = request.body;
    const newUser = new User(gotUserData);
    await newUser.save();
    return response.status(200).json({msg: "signup successful" });
  } catch (error) {
    return response.status(500).json({ msg: "Error while Signup" });
  }
};
