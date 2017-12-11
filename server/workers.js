const rollDice = () => {
  const stats = [];
  let roll = [];

  // get 6 stats
  for (let i = 0; i < 6; i++) {
    // roll 4 random numbers
    for (let j = 0; j < 4; j++) {
      roll.push(Math.floor((Math.random() * 6) + 1));
    }
    // sort roll
    roll.sort((a, b) => {
      return b - a;
    });
    // keep the 3 largest numbers
    roll.pop();
    // add 3 largest numbers together
    stats.push(roll.reduce( (acc, val) => {
      return acc + val;
    }));
    // reset roll
    roll = [];
  }

  return stats;
};

const getLargestStat = (stats) => {
  let largest;
  let dup = stats.slice();

  dup = dup.sort((a, b) => {
    return a - b;
  });

  largest = dup.pop();

  return largest;
};

const generateStats = (charClass, callback) => {
  const attr = {
    str: null,
    dex: null,
    con: null,
    intel: null,
    wis: null,
    char: null,
  };
  const stats = rollDice();

  // put largest stat in class attributes
  const largestStat = getLargestStat(stats);
  if (charClass === 'Barbarian') {
    attr.str = largestStat;
  } else if (charClass === 'Bard') {
    attr.char = largestStat;
  } else if (charClass === 'Cleric') {
    attr.wis = largestStat;
  } else if (charClass === 'Druid') {
    attr.wis = largestStat;
  } else if (charClass === 'Fighter') {
    attr.str = largestStat;
  } else if (charClass === 'Monk') { // dex and wisdom
    attr.dex = largestStat;
  } else if (charClass === 'Paladin') { // str and char
    attr.str = largestStat;
  } else if (charClass === 'Ranger') { // dex and wisdom
    attr.dex = largestStat;
  } else if (charClass === 'Rogue') {
    attr.dex = largestStat;
  } else if (charClass === 'Sorcerer') {
    attr.char = largestStat;
  } else if (charClass === 'Warlock') {
    attr.char = largestStat;
  } else if (charClass === 'Wizard') {
    attr.intel = largestStat;
  }

  stats.splice(stats.indexOf(largestStat), 1);

  // assign other attributes
  for (let key in attr) {
    if (attr[key] === null) {
      attr[key] = stats.pop();
    }
  }

  callback(attr);
};

module.exports.generateStats = generateStats;
