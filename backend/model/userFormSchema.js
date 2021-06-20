const mongoose = require("mongoose");

const userFormSchema = new mongoose.Schema({
  fullName: { type: String },
  email: { type: String },
  phNumber: { type: Number },
});

const userForm = mongoose.model("USER", userFormSchema);

module.exports = userForm;
