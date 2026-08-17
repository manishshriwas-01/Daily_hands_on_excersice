import express from 'express'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import authMiddleware from './middleware/authmiddleware.js'

dotenv.config();

const app=express();

app.use(express.json());

const users=[];

const PORT=process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.json({
        message:"JWT Auth Api is running"
    });
});

app.post('/register',async(req,res)=>{
    const{email,password}=req.body;
    const existingUser=users.find(
        user => user.email === email
    );

    if(existingUser){
        return res.status(409).json({
            error:"Email alredy registered"
        });
    }
    const hashedPassword=await bcrypt.hash(password,10);

    const newUser={
        id:Date.now(),
        email,
        password:hashedPassword
    };
    users.push(newUser);
    console.log(users);

    res.status(201).json({
        message:'User registered successfully',
        user:{
            id:newUser.id,
            email:newUser.email
        }
    })
});

app.post('/login',async(req,res)=>{
    const {email,password}=req.body;

    const user=users.find(
        user=>user.email === email
    );

    if(!user){
        return res.status(401).json({
            error:'Invalid Email or password'
        });
    }
    const isMatch=await bcrypt.compare(
        password
        ,user.password
    );

    if(!isMatch){
        return res.status(401).json({
            error:"Invalid email or password"
        });
    }

    const token=jwt.sign(
        {
            userId:user.id

        },
        process.env.JWT_SECRET,
        {
            expiresIn:'1h'
        }
    )
    res.status(200).json({
        message:"Login successful",
        token
    })
})

app.get('/profile',authMiddleware,(req,res)=>{
    res.status(401).json({
        message:"Profile accessed successfully",
        user:req.user
    });
});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});