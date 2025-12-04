const { humanRaceModifiers, humanVariantModifiers } = require('./humans');
const { elfVariantModifiers } = require('./elves');
const { dwarfVariantModifiers } = require('./dwarves');
const { duendeModifiers } = require('./duendes');
const { ogreModifiers } = require('./ogres');

const raceModifiers = {
  ...humanRaceModifiers,
  ...duendeModifiers,
  ...ogreModifiers
};

const raceVariantModifiers = {
  ...humanVariantModifiers,
  ...elfVariantModifiers,
  ...dwarfVariantModifiers
};

module.exports = {
  raceModifiers,
  raceVariantModifiers
};

