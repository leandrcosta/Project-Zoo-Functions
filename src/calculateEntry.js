const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // fatiando o array[age] por faixa etária
  const child = entrants.filter(({ age }) => age < 18);
  const adult = entrants.filter(({ age }) => age >= 18 && age < 50);
  const senior = entrants.filter(({ age }) => age >= 50);
  // retornando um object com a quantidade por faixa etária;
  return {
    child: child.length,
    adult: adult.length,
    senior: senior.length,
  };
}

function calculateEntry(entrants) {
  const { prices } = data;
  if (!entrants || entrants.length === 0 || Object.keys(entrants).length === 0) return 0;
  const countPeople = countEntrants(entrants);
  return countPeople.child * prices.child
  + countPeople.adult * prices.adult
  + countPeople.senior * prices.senior;
}

module.exports = { calculateEntry, countEntrants };
