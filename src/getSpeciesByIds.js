const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const { species } = data;
  const getAnimals = [];
  ids.forEach((specie) => getAnimals.push(species.find(({ id }) => id === specie)));
  return getAnimals;
}

module.exports = getSpeciesByIds;
