const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const { employees } = data;
  let employeeProfile;
  if (!employeeName) return {};
  return employees.find((employee) => {
    if ((employeeName === employee.firstName) || (employeeName === employee.lastName)) {
      employeeProfile = employee;
    }
    return employeeProfile;
  });
}

module.exports = getEmployeeByName;
