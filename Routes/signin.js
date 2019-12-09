const express = require('express');
const Signup = require("../Models/signup");
var bcrypt = require('bcryptjs');
const router = express.Router();
router.post("/",(req,res)=>{
    const detail = { username : req.body.username}
    Signup.findOne(detail)
    .exec()
    .then(result => {
        if(result === null){
            res.status(403).json({msg : "Invalid Inputs"}).end()
        }
        else{
            if(bcrypt.compareSync(req.body.passwrd, result.passwrd)){
                res.status(200).json({msg : "user authenticated"}).end()
            }
            else{
                res.status(403).json({msg : "Invalid Inputs"}).end()
            }
        }
    })
    .catch(error => {
        res.status(500).json(error).end()
    });
    
})
module.exports = router;