// Write your solution in this file!

let employee = {
  name: "John Doe",
  age: 30,
  department: "IT",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  let updatedEmployee = Object.assign({}, employee);
  updatedEmployee[key] = value;
  return updatedEmployee;
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}


function deleteFromEmployeeByKey(employee, key) {
  let clonedEmployee = Object.assign({}, employee);
  delete clonedEmployee[key];
  return clonedEmployee;
}

// Function to check if the original employee is not modified
function isEmployeeUnmodified(originalEmployee, modifiedEmployee) {
  return JSON.stringify(originalEmployee) === JSON.stringify(modifiedEmployee);
}

// Function to destructively delete a key from an employee
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}

// Run the npm tests
describe("employees", () => {
  beforeEach(() => {
    employee = {
      name: "John Doe",
      age: 30,
      department: "IT",
    };
  });

  it("returns an employee with the original key value pairs and the new key value pair", () => {
    const updatedEmployee = updateEmployeeWithKeyAndValue(
      employee,
      "salary",
      5000
    );
    expect(updatedEmployee).toEqual({
      name: "John Doe",
      age: 30,
      department: "IT",
      salary: 5000,
    });
  });

  it("updates `employee` with the given `key` and `value` (it is destructive) and returns the entire updated employee", () => {
    const updatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(
      employee,
      "salary",
      5000
    );
    expect(updatedEmployee).toEqual({
      name: "John Doe",
      age: 30,
      department: "IT",
      salary: 5000,
    });
  });

  it("deletes `key` from a clone of employee and returns the new employee (it is non-destructive)", () => {
    const clonedEmployee = deleteFromEmployeeByKey(employee, "age");
    expect(clonedEmployee).toEqual({
      name: "John Doe",
      department: "IT",
    });
  });

  it("does not modify the original employee (it is non-destructive)", () => {
    const originalEmployee = Object.assign({}, employee);
    deleteFromEmployeeByKey(employee, "age");
    expect(isEmployeeUnmodified(originalEmployee, employee)).toBe(true);
  });

  it("returns employee without the deleted key/value pair", () => {
    const updatedEmployee = destructivelyDeleteFromEmployeeByKey(
      employee,
      "age"
    );
    expect(updatedEmployee).toEqual({
      name: "John Doe",
      department: "IT",
    });
  });

  it("modifies the original employee", () => {
    const originalEmployee = Object.assign({}, employee);
    destructivelyDeleteFromEmployeeByKey(employee, "age");
    expect(isEmployeeUnmodified(originalEmployee, employee)).toBe(false);
  });
});
