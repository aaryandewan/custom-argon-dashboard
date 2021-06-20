const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Routerrr");
});

const userForm = require("../model/userFormSchema");

router.post("/register", (req, res) => {
  const {
    fullName,
    branch,
    grName,
    email,
    mobile,
    checkedA,
    checkedB,
    checkedC,
    checkedD,
    isSwitched,
    radioValuee,
    selectedDatee,
  } = req.body;

  const userFormm = new userForm({
    fullName,
    branch,
    grName,
    email,
    mobile,
    checkedA,
    checkedB,
    checkedC,
    checkedD,
    isSwitched,
    radioValuee,
    selectedDatee,
  });
  userFormm
    .save()
    .then(() => {
      res.status(201).json({ message: "Form filled" });
    })
    .catch((error) => console.log(error));

  console.log(req.body);
  //   res.json({ message: req.body });
  //   res.send("Don sends");
});

module.exports = router;
