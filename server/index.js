const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js')

const app = express();
const port = 1337;

app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('helloooooo wooooorld!');
});

app.post('/newChar', (req, res) => {
  console.log(req.body);
});

app.listen(port, () => console.log(`listening on port ${port}`));