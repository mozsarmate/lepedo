/**
 * delUser
 * @param objectrepository, user id
 * deletes specific user record from db
 * @returns next
 */
module.exports = function (objectrepository) {
    return async function (req, res, next) {
        try {
            if (typeof res.locals.user === 'undefined') {
                console.log('elvileg ide soha nem kene belepni, mert mar a get mw megfogja');
                return next();
            }

            let problem = false;
            res.locals.expenses.forEach(cur => {
                cur.userto.forEach(curcur => {
                    if (curcur._id.toString() === res.locals.user._id.toString()) {
                        let err2 = new Error();
                        err2.status = 405;
                        throw err2;
                    }
                });
                if (cur.userfrom._id.toString() === res.locals.user._id.toString()) {
                    let err2 = new Error();
                    err2.status = 405;
                    throw err2;
                }
            });
            res.locals.transfers.forEach(cur => {
                if (cur.userto._id.toString() === res.locals.user._id.toString() || cur.userfrom._id.toString() === res.locals.user._id.toString()) {
                    let err2 = new Error();
                    err2.status = 405;
                    throw err2;
                }
            });

            await res.locals.user.remove(err => {
                if (err) {
                    return next(err);
                }
                return next();
            });
        } catch (ex) {
            return next(ex);
        }
    }
}