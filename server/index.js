const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require('./models/Employee')

const app = express();
app.use(express.json());
app.use(cors());

// to connect the server with mongodb database
mongoose.connect('mongodb+srv://harshul:harshul@cluster0.su7r5mf.mongodb.net/')
.then(()=>{
    console.log("MongoDB is connected.")
})
.catch(()=>{
    console.log("Failed to connect.")
});

// to define routes 
app.post('/login', (req, res)=>{
    const {email, password} = req.body;
    EmployeeModel.findOne({email:email})
    .then((user)=>{
        if(user){
            if(user.password === password){
                res.json("Success")
            }else{
                res.json('IncorrectPassword')
            }
        } else{
            res.json("NotFound")
        }
    })
})
app.post('/register', (req, res)=>{
EmployeeModel.create(req.body)
.then((employees)=>res.json(employees))
.catch(err=>res.json(err));
})

app.listen(3001, ()=>{
    console.log("Server is running.")
})