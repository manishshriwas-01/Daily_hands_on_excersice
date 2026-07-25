const transformTask = require('./transform')
const fs = require('fs');

const data=fs.readFileSync("tasks.json","utf-8");
// console.log(data);

const tasks=JSON.parse(data);


const updatedTasks = transformTask(tasks);


fs.writeFileSync("output.json",
    JSON.stringify(updatedTasks,null,2)
);

console.log("succesully added status..");
