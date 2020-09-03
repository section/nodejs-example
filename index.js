const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', express.static(__dirname + '/dist'));

app.listen(port);
console.log('Server started!');
