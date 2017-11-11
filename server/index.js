const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js')
const workers = require('./workers.js');

const app = express();
const port = 1337;

app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/allChars', (req, res) => {
  // get all characters in db
  db.query(function(err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

app.post('/newChar', (req, res) => {
  console.log(req.body);
  var charName = req.body.name;
  var charRace = req.body.race;
  var charClass = req.body.class;

  // send character info to generate stats
  workers.generateStats(charClass, function(attr) {
    // create new character in database
    console.log(attr);
    db.save(charName, charRace, charClass, attr, function(err, newChar) {
      if (err) {
        res.send(err)
      } else {
        res.send(newChar);
      }
    });
  });


});

app.listen(port, () => console.log(`listening on port ${port}`));