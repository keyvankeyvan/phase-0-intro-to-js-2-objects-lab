// Write your solution in this file!

// Init. an employee obj
const employee = {
    name: 'Keyvan',
    streetAddress: '12345 Nyc Ave'
}

// PART 1
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const emp1 = {...employee};
    emp1[key] = value;
    //console.log(emp1);
    return emp1;
}

// PART 2
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

// PART 3
function deleteFromEmployeeByKey(employee, key) {
    const emp2 = {...employee};
    delete emp2[key];
    return emp2;
}

// PART 4
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}