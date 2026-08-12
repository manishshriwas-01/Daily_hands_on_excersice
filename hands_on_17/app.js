import express from 'express';
import helloRoute from './routes/hello.js'

const app = express();

// Request Logger
app.use((req,res,next)=>{
    console.log(`${req.method} ${req.url}`);
    next();
});

//routes
app.use('/api',helloRoute);

// 404 Handler
app.use((req,res)=>{
    res.status(404).json({
        error:"Route not Found"
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});