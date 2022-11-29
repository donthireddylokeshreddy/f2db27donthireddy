const mongoose = require("mongoose") 
const grocarychema = mongoose.Schema({ 
tomatovalue: {type: Number,required: [true, 'value of the grocary cannot be empty']}, 
onionvalue: {type: Number,required: [true, 'value of the grocary cannot be empty']},
capsicumvaluve: {type: Number,required: [true, 'value of the grocary cannot be empty']} 
}) 
 
module.exports = mongoose.model("grocary",grocarychema) 