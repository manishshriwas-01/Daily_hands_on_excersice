import 'dotenv/config';
import express from 'express'
import { body, validationResult } from 'express-validator';
 

const app = express();

const PORT=Number(process.env.PORT) || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Validation Error API is running'
    });
})

app.post('/tasks', [
    body('title')
        .notEmpty()
        .withMessage('Title is required')
        .isLength({ min: 3 })
        .withMessage('Title must be at least 3 characters long'),

    body('status')
        .isIn(['todo', 'done'])
        .withMessage('Status must be either todo or done')
],
    (req, res,next) => {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            const error = new Error('Validation failed');

            error.statusCode = 400;
            error.errors = errors.array();

            return next(error);
        }

        const task = {
            title: req.body.title,
            status: req.body.status
        };

        res.status(201).json({
            message: 'Task received successfully',
            task: task
        });
    }
);


app.use((err,req,res,next)=>{
    console.error(err);
     res.status(err.statusCode || 500).json({
        error: err.message,
        errors: err.errors || []
    });
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 