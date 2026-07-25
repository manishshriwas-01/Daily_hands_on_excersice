const students = [
  { name: "A", marks: 40 },
  { name: "B", marks: 80 },
  { name: "C", marks: 90 },
  { name: "D", marks: 30 }
];

const result= students.filter(students=>students.marks>=50)
                .map(students=>students.name);

console.log(result);