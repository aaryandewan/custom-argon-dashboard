const express = require("express");
const mongoose = require("mongoose");
// const cors = require("cors");
// const mongoose = require('mongoose') // connects to the DB
const app = express();
// require('dotenv').config()

const userForm = require("./model/userFormSchema");
// app.use(require("./router/auth"));
const DB =
  "mongodb+srv://admin:admin@cluster0.c46gd.mongodb.net/argon-dashoard?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Connectinon succes");
  })
  .catch((err) => console.error(err));

const port = process.env.PORT || 5000;

app.use(express.json());

app.use(require("./router/auth"));
// app.use(cors());
// app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from thr server");
});

app.listen(port, () => {
  console.log("Server runs");
});
//mongodb+srv://admin:<password>@cluster0.c46gd.mongodb.net/argon-dashoard?retryWrites=true&w=majority
