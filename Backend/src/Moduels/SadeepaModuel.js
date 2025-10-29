const mongoose = require("mongoose");
const sadeepaSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const sadeepamodel=mongoose.model("sadeepamodel",sadeepaSchema);
module.exports=sadeepamodel;