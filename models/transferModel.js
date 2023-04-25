const Schema = require('mongoose').Schema;
const db = require('../config/cyabno');

const Transfer = db.model('transfer', {
    id : Number,
    date : String,
    userfrom : {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    userto : {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    amount : Number,
});

module.exports = Transfer;