const mongoose = require("mongoose");
const signUpSchema= mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username : String,
    passwrd : String
})
module.exports = mongoose.model('regusers',signUpSchema);