import express, { Router } from 'express'

const router= express.Router();

router.get('/hello',(req,res)=>{
    res.json({
        message: 'Hello from Express!'
    });
});

router.get('/about', (req, res) => {
    res.json({
        message: 'This is the Express Hello  about API'
    });
});

router.get('/status', (req, res) => {
    res.json({
        status: 'OK'
    });
});

export default router;