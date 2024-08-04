import mongoose from "mongoose";

export const Connection = async (username, password) => {
<<<<<<< HEAD
  // const url = `mongodb+srv://${username}:${password}@blog-clusster.rqysovs.mongodb.net/`;
    const url = `mongodb+srv://${username}:${password}@blog-clusster.rqysovs.mongodb.net/`;
=======
  const url =`mongodb+srv://${username}:${password}@blog-clusster.rqysovs.mongodb.net/`;
>>>>>>> b047c7af968c2defde288ca932b322a98c4a7fc4
  try {
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology : true });
    console.log("Success fully database connected");
  } catch (error) {
    console.log("Data base is not connected", error);
  }
};