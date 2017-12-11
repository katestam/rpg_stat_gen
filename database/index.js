const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_SERVER}`, { useMongoClient: true });
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected to database.');
});

const charSchema = mongoose.Schema({
  name: String,
  race: String,
  class: String,
  strength: Number,
  dexterity: Number,
  constitution: Number,
  intelligence: Number,
  wisdom: Number,
  charisma: Number,
});

const Character = mongoose.model('Character', charSchema);

const save = (n, r, cl, attr, callback) =>
  new Character({
    name: n,
    race: r,
    class: cl,
    strength: attr.str,
    dexterity: attr.dex,
    constitution: attr.con,
    intelligence: attr.intel,
    wisdom: attr.wis,
    charisma: attr.char,
  }).save(callback);

const query = (callback) => {
  Character
    .find({})
    .sort({ _id: -1 })
    .limit(10)
    .exec(callback);
};

module.exports.save = save;
module.exports.query = query;
