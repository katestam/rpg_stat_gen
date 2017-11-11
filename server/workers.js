var rollDice = function() {
  var stats = [];
  var roll = [];

  // get 6 stats
  for (var i = 0; i < 6; i++) {
    // roll 4 random numbers
    for (var j = 0; j < 4; j++) {
      roll.push(Math.floor(Math.random() * 6 + 1));
    }
    // sort roll
    roll.sort(function(a, b) {
      return b-a;
    });
    // keep the 3 largest numbers
    roll.pop();
    // add 3 largest numbers together
    stats.push(roll.reduce(function(acc, val) {
      return acc + val;
    }));
    // reset roll
    roll = [];
  }

  return stats;
}

var getLargestStat = function(stats) {
  var largest;
  var dup = stats.slice();

  dup = dup.sort(function(a, b) {
    return a-b;
  });

  largest = dup.pop();

  return largest;
}


var generateStats = function(charClass, callback) {
  var attr = {
    str: null,
    dex: null,
    con: null,
    intel: null,
    wis: null,
    char: null
  }
  var stats = rollDice();

  // put largest stat in class attributes
  var largestStat = getLargestStat(stats);
  if (charClass === 'barbarian') {
    attr.str = largestStat;
  } else if (charClass === 'bard') {
    attr.char = largestStat;
  } else if (charClass === 'cleric') {
    attr.wis = largestStat;
  } else if (charClass === 'druid') {
    attr.wis = largestStat;
  } else if (charClass === 'fighter') {
    attr.str = largestStat;
  } else if (charClass === 'monk') { // dex and wisdom
    attr.dex = largestStat;
  } else if (charClass === 'paladin') { // str and char
    attr.str = largestStat;
  } else if (charClass === 'ranger') { // dex and wisdom
    attr.dex = largestStat;
  } else if (charClass === 'rogue') {
    attr.dex = largestStat;
  } else if (charClass === 'sorcerer') {
    attr.char = largestStat;
  } else if (charClass === 'warlock') {
    attr.char = largestStat;
  } else if (charClass === 'wizard') {
    attr.intel = largestStat;
  }

  stats.splice(stats.indexOf(largestStat), 1);

  // assign other attributes
  for (var key in attr) {
    if (attr[key] === null) {
      attr[key] = stats.pop();
    }
  }

  return attr;
}

module.exports.generateStats = generateStats;