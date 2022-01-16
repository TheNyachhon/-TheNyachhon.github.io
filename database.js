const mongoose = require('mongoose')

//Creating a Schema
const messagesSchema = new mongoose.Schema({
    Name: String,
    Email:String,
    Message:String
}); 

//Creating a model
const Messages = mongoose.model('Messages',messagesSchema)

//Exporting the modules
module.exports = {Messages}

