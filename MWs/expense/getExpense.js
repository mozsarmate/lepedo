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
            if (err || !expense) {
                if(!err){
                    var err2 = new Error("204");
                    err2.status = 204;
                    return next(err2);
                }
                return next(err);
            }
            res.locals.expense = expense;
            return next();
        });
    };
};