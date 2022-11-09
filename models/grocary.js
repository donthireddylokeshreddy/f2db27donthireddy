const mongoose = require("mongoose") 
const grocarychema = mongoose.Schema({ 
tomatovalue: Number, 
onionvalue: Number, 
capsicumvaluve: Number 
}) 
 
module.exports = mongoose.model("grocary",grocarychema) 