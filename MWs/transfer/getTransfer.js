/**
 * getTransfer
 * @param objectrepository, transfer id
 * @returns specific expense data from db
 */
module.exports = function (objectrepository) {
    return function (req,res,next) {
        res.locals.transfer = {id:1, date:"2022.01.01.", userfrom:4, userto:1, amount:10000 };
        return next();
    }
}