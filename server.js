const express = require('express');
const app = express();

let allowCrossDomain = function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
};

app.get('/', (req, res) => res.send('Hello World!'));

const port = 8080;
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));


