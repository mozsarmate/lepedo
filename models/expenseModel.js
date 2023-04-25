
const Schema = require('mongoose').Schema;
const db = require('../config/cyabno');

const Expense = db.model('expense', {
    id : Number,
    name : String,
    date : String,
    userfrom : {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    userto : [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }],
    amount : Number,
});

module.exports = Expense;