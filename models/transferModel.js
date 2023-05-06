const Schema = require('mongoose').Schema;
const db = require('../config/cyabno');

const Transfer = db.model('Transfer', {
    id : Number,
    date : String,
    userfrom : {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    userto : {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    amount : Number,
});

module.exports = Transfer;