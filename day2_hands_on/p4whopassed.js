const students=[
    {name:"rohit",marks:21},
    {name:"raj",marks:50},
    {name:"ron",marks:65},
    {name:"man",marks:98},
    {name:"karan",marks:100},

];

const result=students.filter(students=>students.marks>=50);

console.log(result);