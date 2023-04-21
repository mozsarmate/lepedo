/**
 * calculateStat
 * @param objectrepository, transfer id
 * transfers statistical data to the frontend
 * @returns function(*, *, *): *
 */
module.exports = function (objectrepository) {
    return function (req,res,next) {
        res.locals.spentall = 41848;
        res.locals.doneall = 25682;
        res.locals.spentleast = "Kristóf";
        res.locals.expdb = 7;
        res.locals.tradb = 3;
        return next();
    }
}