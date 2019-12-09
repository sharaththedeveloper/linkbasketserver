const express = require('express');
const Bookmark = require("../Models/bookmark");
const router = express.Router();
router.post("/",(req,res)=>{
    const detail = { username : req.body.username}
    Bookmark.find(detail)
    .exec()
    .then(result => {
       res.status(200).json({data : result}).end() 
    })
    .catch(error => {
        res.status(500).json(error).end()
    });
    
})
module.exports = router;