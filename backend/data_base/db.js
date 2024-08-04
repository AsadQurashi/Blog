import mongoose from "mongoose";

export const Connection = async (username, password) => {
  // const url = `mongodb+srv://${username}:${password}@blog-clusster.rqysovs.mongodb.net/`;
    const url = `mongodb+srv://${username}:${password}@blog-clusster.rqysovs.mongodb.net/`;
  try {
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology : true });
    console.log("Success fully database connected");
  } catch (error) {
    console.log("Data base is not connected", error);
  }
};