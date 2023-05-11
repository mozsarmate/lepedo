/**
 * delTransfer
 * @param objectrepository, transfer id
 * @param id
 * deletes specific transfer record from db
 * @returns next
 */
module.exports = function (objectrepository) {
    return function (req,res,next) {
        if (typeof res.locals.transfer === "undefined"){
            console.log('elvileg ide soha nem kene belepni, mert mar a get mw megfogja');
            return next();
        }

        res.locals.transfer.remove(err => {
            if (err) {
                return next(err);
            }
            return next();
        });
    }
}