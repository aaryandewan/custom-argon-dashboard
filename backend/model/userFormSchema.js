const mongoose = require("mongoose");

const userFormSchema = new mongoose.Schema({
  fullName: { type: String },
  branch: { type: String },
  grName: { type: String },
  email: { type: String },
  mobile: { type: Number },
  checkedA: { type: Boolean },
  checkedB: { type: Boolean },
  checkedC: { type: Boolean },
  checkedD: { type: Boolean },
  isSwitched: { type: Boolean },
  radioValuee: { type: String },
  selectedDatee: { type: String },
});

const userForm = mongoose.model("USER", userFormSchema);

module.exports = userForm;
