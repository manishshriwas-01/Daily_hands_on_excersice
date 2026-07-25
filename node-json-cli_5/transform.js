function transformTask(tasks){
    return tasks.map(task=>({
        ...task,
        status:task.completed
        ? "Completed"
        : "Pending"
    }))
}
module.exports = transformTask;