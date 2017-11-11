const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js')

const app = express();
const port = 1337;

app.use(express.static(__dirname + '/../public'));

app.get('/', (req, res) => {
  res.send('helloooooo wooooorld!');
});

app.post('/newChar', (req, res) => {
  console.log(req);
});

app.listen(port, () => console.log(`listening on port ${port}`));