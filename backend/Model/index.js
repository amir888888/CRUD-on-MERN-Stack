const mongoose = require('mongoose');

const model =  new mongoose.Schema({
    user:String,
    
});

module.exports = mongoose.model('models', model)