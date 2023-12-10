let express = require("express");
let app = express();
require("dotenv").config();
// console.log('Hello World');

app.get("/", function (req, res) {
  const absolutePath = __dirname + "/views/index.html";
  res.sendFile(absolutePath);
});

// Using public directory to access css styles
const pubDirectory = __dirname + "/public";
app.use("/public", express.static(pubDirectory));

// Conditionally rendering response based on environment variables
app.get("/json", function (req, res) {
  const mySecret = process.env.MESSAGE_STYLE;
  const myData = { message: "Hello json" };
  if (mySecret === "uppercase") {
    res.json({ message: "Hello json".toUpperCase() });
  } else {
    res.json(myData);
  }
});

// Middleware to log the method, path and ip of request to console
app.use(function middleware(req, res, next){
  const method = req.method
  const path = req.path
  const ip = req.ip
  console.log(ip)
  console.log(path)
  console.log(method)
  console.log(`${method} ${path} - ${ip}`)
  next()
})


module.exports = app;
