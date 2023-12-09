let express = require('express');
let app = express();
let dotenv = require('dotenv').config()
// console.log('Hello World');

app.get("/", function(req, res) {
    const absolutePath = __dirname + "/views/index.html"
    res.sendFile(absolutePath);
});

const pubDirectory = __dirname + "/public";
app.use('/public', express.static(pubDirectory));

app.get("/json", function(req, res) {
    const myData = {"message": "Hello json"};

    if (process.env.MESSAGE_STYLE === 'uppercase') {
        myData.message = myData.message.toUpperCase();
    }

    res.json(myData);
});



































 module.exports = app;
