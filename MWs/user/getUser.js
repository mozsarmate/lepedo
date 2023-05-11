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
                if(!err){
                    var err2 = new Error("204");
                    err2.status = 204;
                    return next(err2);
                }
                return next(err);
            }

            res.locals.user = user;
            return next();
        });
    };
};