const mongoose = require("mongoose");

const userFormSchema = new mongoose.Schema({
  fullName: { type: String },
  branch: { type: String },
  grName: { type: String },
  email: { type: String },
  mobile: { type: Number },
});

const userForm = mongoose.model("USER", userFormSchema);

module.exports = userForm;
