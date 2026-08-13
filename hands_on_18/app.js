import express from 'express';

const app = express();
app.use(express.json());

const Tasks=[
    {
        id: 1,
        title: 'Learn Express',
        status: 'todo'
    },
    {
        id: 2,
        title: 'Learn REST API',
        status: 'done'
    },
    {
        id: 3,
        title: 'Build CRUD API',
        status: 'todo'
    }
];


app.post('/tasks', (req, res) => {

    const newTask = {
        id: Date.now(),
        title: req.body.title,
        status: req.body.status
    };

    Tasks.push(newTask);

    res.status(201).json(newTask);
});

app.put('/tasks/:id', (req, res) => {

    const id = Number(req.params.id);

    const task = Tasks.find(
        (task) => task.id === id
    );

    if (!task) {
        return res.status(404).json({
            error: 'Task not found'
        });
    }

    task.title = req.body.title;
    task.status = req.body.status;

    res.status(200).json(task);
});
app.delete('/tasks/:id', (req, res) => {

    const id = Number(req.params.id);

    const taskIndex = Tasks.findIndex(
        (task) => task.id === id
    );

    if (taskIndex === -1) {
        return res.status(404).json({
            error: 'Task not found'
        });
    }

    Tasks.splice(taskIndex, 1);

    res.status(204).send();
});

app.get('/tasks', (req, res) => {

    const { status } = req.query;

    if (!status) {
        return res.status(200).json(Tasks);
    }

    const filteredTasks = Tasks.filter(
        (task) => task.status === status
    );

    res.status(200).json(filteredTasks);
});

app.get('/tasks/:id', (req, res) => {
    const id = Number(req.params.id);

    const task = Tasks.find(
        (task) => task.id === id
    );

    if (!task) {
        return res.status(404).json({
            error: 'Task not found'
        });
    }

    res.status(200).json(task);
});

app.listen(3000, () => {
    console.log('REST API running on port 3000');
});