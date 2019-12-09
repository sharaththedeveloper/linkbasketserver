const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Bookmark = require("../Models/bookmark")
router.post("/",(req,res)=>{
    const detail = new Bookmark({
        _id :new mongoose.Types.ObjectId(),
        username: req.body.username,
        title: req.body.title,
        url : req.body.url
    })
    detail.save()
    .then(result=>{
        console.log(result);
        res.status(201).json({msg : "New bookmark added"}).end()
    })
    .catch(error=>{
        console.log(error);
        res.status(500).json(error).end()
    });
})
module.exports = router;