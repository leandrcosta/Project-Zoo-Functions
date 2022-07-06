const data = require('../data/zoo_data');
// Esse foi compicado, mas com as luzes do Tiago nas mentorias eu conseguir desenvolver a lógica.
// Parques >>> que Zoo rsrs
const { hours, species } = data;

const weekOfSchedule = () => Object.keys(hours).reduce((acc, curr) => {
  if (curr !== 'Monday') {
    acc[curr] = {
      officeHour: `Open from ${hours[curr].open}am until ${hours[curr].close}pm`,
      exhibition: species.filter(({ availability }) =>
        availability.includes(curr)).map(({ name }) => `${name}`),
    };
  } else {
    acc[curr] = {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    };
  }
  return acc;
}, {});

function scheduleDay(scheduleOfDay) {
  return Object.keys(hours).some((day) => (day === scheduleOfDay));
}

function getDaySchedule(scheduleOfDay) {
  const schedule = {};
  const scheduleWeek = weekOfSchedule();
  if (scheduleOfDay === 'Monday') schedule[scheduleOfDay] = scheduleWeek.Monday;
  else schedule[scheduleOfDay] = scheduleWeek[scheduleOfDay];
  return schedule;
}

function thisAnimal(animalTarget) {
  return species.map(({ name }) => name).some((animal) => (animal === animalTarget));
}

function getAnimalSchedule(animalTarget) {
  return species.find(({ name }) => name === animalTarget).availability;
}

function getSchedule(scheduleTarget) {
  if (scheduleDay(scheduleTarget)) return getDaySchedule(scheduleTarget);
  if (thisAnimal(scheduleTarget)) return getAnimalSchedule(scheduleTarget);
  return weekOfSchedule();
}
module.exports = getSchedule;
