const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cyabno',{useNewUrlParser: true});

module.exports = mongoose;