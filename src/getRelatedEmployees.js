const data = require('../data/zoo_data');

function isManager(id) {
  const { employees } = data;
  return employees.some(({ managers }) => managers.includes(id));
}

function getRelatedEmployees(managerId) {
  const { employees } = data;
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const EmployeeProfile = employees.filter(({ managers }) => managers.includes(managerId));
  return EmployeeProfile.map((fullName) => `${fullName.firstName} ${fullName.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
