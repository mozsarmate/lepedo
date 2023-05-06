const reqOption = require('../requireOption');
/**
 * getExpenses
 * @param objectrepository
 * @returns all Expense data from db
 */
module.exports = function (objectrepository) {
    //const ExpenseModel = reqOption(objectrepository, 'ExpenseModel');
    return function (req, res, next) {
        res.locals.expenses = [];
        objectrepository.Expense.find().populate('userfrom').populate('userto').exec( (err, expenses) => {
            if (err || !expenses) {
                return next(err);
            }
            res.locals.expenses = expenses;
            return next();
        });
        /*
        res.locals.expenses = [
            {id:1, name:"NuPhy", date:"2023-02-02", userfrom:1, userto:[1,3], amount:44560 },
            {id:2, name:"Spar", date:"2023-04-02", userfrom:3, userto:[1,2,4], amount:4296 },
            {id:3, name:"Lidl", date:"2023-04-12", userfrom:2, userto:[1], amount:2860 },
            {id:4, name:"AK", date:"2023-04-21", userfrom:1, userto:[3,4], amount:6300 },
            {id:5, name:"AK 2", date:"2023-04-23", userfrom:2, userto:[4], amount:600 },
            {id:6, name:"AK 3", date:"2023-04-27", userfrom:3, userto:[1, 2, 3], amount:8024 },
            {id:7, name:"AK 4", date:"2023-04-29", userfrom:4, userto:[3,4], amount:1285 }
        ];
        return next();
        */
    };
};