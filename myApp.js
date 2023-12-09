let express = require('express');
let app = express();

// console.log('Hello World');

app.get("/", function(req, res) {
    const absolutePath = __dirname + "/views/index.html"
    res.sendFile(absolutePath);
});

const pubDirectory = __dirname + "/public"
app.use(pubDirectory, express.static(pubDirectory))



































 module.exports = app;
