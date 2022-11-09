const mongoose = require("mongoose") 
const grocarySchema = mongoose.Schema({ 
tomatovalue: Number, 
onionvalue: Number, 
capsicumvaluve: Number 
}) 
 
module.exports = mongoose.model("grocary",grocarySchema) 