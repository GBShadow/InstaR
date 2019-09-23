const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect(
  "mongodb+srv://gbshadow:Shadow.666@cluster0-gpjn6.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

app.use(require('./routes'));

app.listen(3333);
