const { humanRaceModifiers, humanVariantModifiers } = require('./humans');
const { elfVariantModifiers, elfModifiers } = require('./elves');
const { dwarfVariantModifiers, dwarfModifiers } = require('./dwarves');
const { duendeModifiers } = require('./duendes');
const { ogreModifiers } = require('./ogres');

const raceModifiers = {
  ...humanRaceModifiers,
  ...duendeModifiers,
  ...ogreModifiers,
  ...elfModifiers
  ,
  ...dwarfModifiers
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

