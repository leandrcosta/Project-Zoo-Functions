const data = require('../data/zoo_data');

function countAnimals(animal) {
  const { species } = data;
  if (!animal) {
    return species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }
  const countSpecie = species.find(({ name }) => name === animal.specie).residents;
  if (!animal.sex) return countSpecie.length;
  return countSpecie.filter(({ sex }) => sex === animal.sex).length;
}
module.exports = countAnimals;
