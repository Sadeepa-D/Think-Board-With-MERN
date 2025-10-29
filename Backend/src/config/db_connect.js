const mongoose = require("mongoose");
const dbconnect = async () => {
  try {
   await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to mongobd Sucessfully");
  } catch (error) {
    console.error("mongo db connection erro", error);
    process.exit(1);
  }
};
module.exports=dbconnect;