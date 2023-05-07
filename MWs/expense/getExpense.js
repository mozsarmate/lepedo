const reqOption = require("../requireOption");
/**
 * getExpense
 * @param objectrepository, expense id
 * @returns specific expense data from db
 */
module.exports = function (objectrepository) {
    //const ExpenseModel = reqOption(objectrepository, 'ExpenseModel');
    return function (req, res, next) {
        objectrepository.Expense.findOne({_id: req.params.expenseid}).populate('userfrom').populate('userto').exec((err, expense) => {
            if (err || !expense)
                return res.redirect('/error/204');
            res.locals.expense = expense;
            return next();
        });
    };
};