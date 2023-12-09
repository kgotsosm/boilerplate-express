let express = require('express');
let app = express();
require('dotenv').config()
// console.log('Hello World');

app.get("/", function(req, res) {
    const absolutePath = __dirname + "/views/index.html"
    res.sendFile(absolutePath);
});

const pubDirectory = __dirname + "/public";
app.use('/public', express.static(pubDirectory));

const myData = { "message": "Hello json" };
app.get('/json', function(req, res) {
    const jsonPath = __dirname + "/json";

    if (process.env.MESSAGE_STYLE == 'uppercase') {
        myData.message = myData.message.toUpperCase();
        console.log(myData)
    }

    res.json(myData);
    console.log(myData)
});



































 module.exports = app;
