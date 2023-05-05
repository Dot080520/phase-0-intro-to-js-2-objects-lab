// Write your solution in this file!
// Write your solution in this file!
let employee = {
    name: "any",
    streetAddress: "123 Fake St.",
}


function updateEmployeeWithKeyAndValue(employee, key, value) {
    let copyOfEmplyee = { ...employee };
    copyOfEmplyee[key] = value;
    return copyOfEmplyee;
}


//console.log(updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway'));
//console.log(employee);


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
//destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway'


function deleteFromEmployeeByKey(employee, key) {
    let deleteFromEmployeeByKey = { ...employee };
    //console.log
    //deleteFromEmployeeByKey[key];
    delete deleteFromEmployeeByKey[key];
    return deleteFromEmployeeByKey;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee ;  
}
