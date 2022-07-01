const data = require('../data/zoo_data');
// Codigo desenvolvido com ajuda da Mentoria de Projeto com Tiago
function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  const { residents } = species.find(({ name }) => name === animal);
  return residents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
