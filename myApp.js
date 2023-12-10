let express = require("express");
let app = express();
require("dotenv").config();
// console.log('Hello World');

// Middleware to log the method, path, and ip of request to console
app.use(function middleware(req, res, next) {
  const method = req.method;
  const path = req.path;
  const ip = req.ip;

  // Logging the request details in the specified format
  console.log(`${method} ${path} - ${ip}`);

  // Call next() to proceed to the next middleware or route handler
  next();
});

// Middleware to get current time
app.get('/now', function(req, res, next) {
  req.time = new Date().toString();
  next();
}, function(req, res) {
  res.send({time: req.time});
});

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

// Get route parameter input from client
app.get("/:word/echo", function(req, res){
  const word = req.params.word
  res.json({echo: word})
})

// Get Query Parameter Input from the Client
app.get('/name', function(req, res) {
  const show = { name: `${req.query(firstname)} ${req.query(lastname)}`}
  res.json(req.query(show))
})
module.exports = app;
