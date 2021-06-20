const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Routerrr");
});

router.post("/register", (req, res) => {
  console.log(req.body);
  res.json({ message: req.body });
  //   res.send("Don sends");
});

module.exports = router;
