/**
 * delUser
 * @param objectrepository, user id
 * deletes specific user record from db
 * @returns next
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {
        if (typeof res.locals.user === 'undefined') {
            console.log('elvileg ide soha nem kene belepni, mert mar a get mw megfogja');
            return next();
        }

        res.locals.user.remove(err => {
            if (err) {
                return next(err);
            }
            return next();
        });
    }
}