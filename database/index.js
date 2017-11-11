var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', { useMongoClient: true });
mongoose.Promise = global.Promise;

var Character = mongoose.model('Character', {
  name: String,
  race: String,
  class: String,
  strength: Number,
  dexterity: Number,
  constitution: Number,
  intelligence: Number,
  wisdom: Number,
  charisma: Number
});

let save = function(name, race, cl, str, dex, con, intel, wis, char, callback){
  return new Character({
    name: name,
    race: race,
    class: cl,
    strength: str,
    dexterity: dex,
    constitution: con,
    intelligence: intel,
    wisdom: wis,
    charisma: char
  }).save(callback);
}

module.exports.save = save;