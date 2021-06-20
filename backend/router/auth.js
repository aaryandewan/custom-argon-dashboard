const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Routerrr");
});

const userForm = require("../model/userFormSchema");

router.post("/register", (req, res) => {
  const { fullName, email, phNumber } = req.body;

  const userFormm = new userForm({ fullName, email, phNumber });
  userFormm
    .save()
    .then(() => {
      res.status(201).json({ message: "Form filled" });
    })
    .catch((error) => console.log(error));

  console.log(fullName);
  //   res.json({ message: req.body });
  //   res.send("Don sends");
});

module.exports = router;
