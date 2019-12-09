const mongoose = require("mongoose");
const bookmarkSchema= mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username : String,
    title : String,
    url : String
})
module.exports = mongoose.model('bookmarks',bookmarkSchema);