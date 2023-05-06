const Schema = require('mongoose').Schema;
const db = require('../config/cyabno');

const User = db.model('User', {
    name : String,
    revtag : String,
    color : String,
});

module.exports = User;

