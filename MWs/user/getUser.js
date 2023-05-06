const reqOption = require("../requireOption");
/**
 * getUser
 * @param objectrepository, user id
 * @returns specific user data from db
 */
module.exports = function (objectrepository) {
    //const UserModel = reqOption(objectrepository, 'UserModel');
    return function (req, res, next) {
        objectrepository.User.findOne({_id: req.params.userid}, (err, user) => {
            if (err || !user) {
                console.log('redirected');
                return res.redirect('/error/204');
            }

            res.locals.user = user;
            return next();
        });
    };
};