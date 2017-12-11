const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/index.js');
const workers = require('./workers.js');
require('dotenv').config();

const app = express();
app.set('port', (process.env.PORT || 1337));
const port = app.get('port');

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/characters', (req, res) => {
  // get all characters in db
  db.query((err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

app.post('/api/characters', (req, res) => {
  console.log(req.body);
  const charName = req.body.name;
  const charRace = req.body.race;
  const charClass = req.body.class;

  // send character info to generate stats
  workers.generateStats(charClass, (attr) => {
    // create new character in database
    console.log(attr);
    db.save(charName, charRace, charClass, attr, (err, newChar) => {
      if (err) {
        res.send(err);
      } else {
        console.log(charName, 'saved to database');
        res.send(newChar);
      }
    });
  });
});

app.listen(port, () => console.log(`listening on port ${port}`));
