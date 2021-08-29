const mongoose = require('mongoose');

const Todo1Schema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('Todo1',Todo1Schema);