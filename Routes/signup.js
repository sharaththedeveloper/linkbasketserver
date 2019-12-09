const express = require('express');
const Signup = require("../Models/signup");
const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
const router = express.Router();
router.post("/",(req,res)=>{
    Signup.distinct('username')
    .then(result => {
        if(result.includes(req.body.username)){
            res.status(200).json({msg : "user already present"}).end()
        }
        else{
            let hash = bcrypt.hashSync(req.body.passwrd, 10);
            const details = new Signup({
                _id :new mongoose.Types.ObjectId(),
                username : req.body.username,
                passwrd :hash
            })
            details.save()
            .then(result => {
                res.status(201).json({msg : "user added"}).end()
            })
            .catch(error => {
                res.status(500).json(error).end()
            });
        }
    })
    .catch(error=>{
        console.log(error);
        res.status(500).json(error).end()
    })
   
    
})
module.exports = router;