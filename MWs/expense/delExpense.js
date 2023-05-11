/**
 * delExpense
 * @param objectrepository, expense id
 * deletes specific expense record from db
 * @returns next
 */
module.exports = function (objectrepository) {
    return function (req,res,next) {
        if (typeof res.locals.expense === "undefined"){
            console.log('elvileg ide soha nem kene belepni, mert mar a get mw megfogja');
            return next();
        }

        res.locals.expense.remove(err => {
            if (err) {
                return next(err);
            }
            return next();
        });
    }
}