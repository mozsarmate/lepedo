
const Schema = require('mongoose').Schema;
const db = require('../config/cyabno');

const Expense = db.model('Expense', {
    id : Number,
    name : String,
    date : String,
    userfrom : {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    userto : [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    amount : Number,
});

//Expense.populate('userfrom').populate('userto').execPopulate();

module.exports = Expense;