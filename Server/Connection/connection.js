const mongoose = require("mongoose");
const conn = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/Contact").then(() => {
      console.log("connected successfully"),
        (error) => {
          console.log(error);
        };
    });
  } catch (error) {
    console.log(error);
  }
};
conn();
