/**
 * getExpense
 * @param objectrepository, expense id
 * @returns specific expense data from db
 */
module.exports = function (objectrepository) {
    return function (req,res,next) {
        res.locals.expense = {id:1, name:"NuPhy", date:"2022-02-02", userfrom:1, userto:[1,3], amount:44562 };
        return next();
    }
}