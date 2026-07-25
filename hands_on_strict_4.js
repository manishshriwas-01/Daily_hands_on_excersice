"use strict";
function calculSalary(hours, rate) {
    return hours * rate;
}
function getEmploye(employee) {
    return `${employee.name} works in ${employee.department}`;
}
function printDat(data) {
    console.log(data);
}
const employees = [
    {
        id: 1,
        name: "Manish",
        department: "Engineering",
        salary: 50000
    },
    {
        id: 2,
        name: "Rahul",
        department: "HR",
        salary: 45000
    }
];
const selectedEmployee = employees[0];
console.log(calculSalary(8, 1000));
console.log(getEmploye(selectedEmployee));
printDat(selectedEmployee);
