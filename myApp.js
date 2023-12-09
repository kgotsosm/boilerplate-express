let express = require("express");
let app = express();
require("dotenv").config();
// console.log('Hello World');

app.get("/", function (req, res) {
  const absolutePath = __dirname + "/views/index.html";
  res.sendFile(absolutePath);
});

const pubDirectory = __dirname + "/public";
app.use("/public", express.static(pubDirectory));

app.get("/json", function (req, res) {
  const mySecret = process.env.MESSAGE_STYLE;
  const myData = { message: "Hello json" };
  if (mySecret === "uppercase") {
    res.json({ message: "Hello json".toUpperCase() });
  } else {
    res.json(myData);
  }
});

module.exports = app;
