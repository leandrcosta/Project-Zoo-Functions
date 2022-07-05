const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const { species, employees } = data;
  const employee = employees.find((element) => element.id === id);
  const animals = species.find((specie) => specie.id === employee.responsibleFor[0]).residents;
  const responsibleForAnimal = animals.reduce((acc, curr) => (acc.age > curr.age ? acc : curr));
  return Object.values(responsibleForAnimal);
}
module.exports = getOldestFromFirstSpecies;
