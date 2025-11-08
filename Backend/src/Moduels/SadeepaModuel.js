const mongoose = require("mongoose");
const noteschema = new mongoose.Schema(
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
const notemodule = mongoose.model("notemodule", noteschema,);
module.exports = notemodule;
