const students = [
  { name: "A", marks: 40 },
  { name: "B", marks: 80 }
];

const result = students.map(student => ({
    ...student,
    marks: student.marks + 10
}));

console.log(result);
console.log(students);