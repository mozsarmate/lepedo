/**
 * render
 * @param objectrepository
 * @param link
 * redirects to the given link (not sure this it the best way to do that)
 * @returns next
 */

const User = require("../../models/userModel");
module.exports = function (objectrepository) {

    return function (req, res, next) {
        if(typeof res.locals.cuser === 'undefined')
            res.locals.cuser = new objectrepository.User;
        
        res.locals.cuser.name = "alma";
        res.locals.cuser.color = "orange";
        res.locals.cuser.revtag = "ad";

        res.locals.cuser.save(err => {
            if (err) {
                console.error(err);
            } else {
                console.log('User saved successfully!');
            }
            return next();
        });

    }
}