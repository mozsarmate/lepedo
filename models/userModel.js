const Schema = require('mongoose').Schema;
const db = require('../config/cyabno');

const User = db.model('user', {
    id : Number,
    name : String,
    revtag : String,
    color : String,
});

module.exports = User;

