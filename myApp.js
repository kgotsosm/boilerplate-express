let express = require('express');
let app = express();

console.log('Hello World');

app.get("/", function(req, res) {
    absolutePath = "/views/index.html"
    res.send(absolutePath);
});




































 module.exports = app;
