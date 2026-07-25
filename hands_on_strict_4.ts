interface Employee{
    id:number;
    name:string;
    department: string;
    salary: number;
}

function calculSalary(hours:number,rate:number):number{
            return hours*rate;
}

function getEmploye(employee:Employee):string{
    return `${employee.name} works in ${employee.department}`;

}

function printDat(data:Employee):void{
    console.log(data);
}

const employees : Employee[]=[
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
]


const selectedEmployee: Employee = employees[0];

console.log(calculSalary(8, 1000));
console.log(getEmploye(selectedEmployee));
printDat(selectedEmployee);