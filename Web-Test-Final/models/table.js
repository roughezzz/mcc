var mongoose = require("mongoose");

//SCHEMA SETUP
var tableSchema =  new mongoose.Schema({
    reference_number: String,
    name: String,
    rank: String,
    description: String,
    image: String,
    email: String,
    date: String
});

var Table = mongoose.model("Table", tableSchema);

module.exports = Table;