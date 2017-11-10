const express = require('express');
var bodyParser = require('body-parser');

const app = express();
const port = 1337;

app.get('/', (req, res) => {
  res.send('helloooooo wooooorld!');
});

app.listen(port, () => console.log(`listening on port ${port}`));