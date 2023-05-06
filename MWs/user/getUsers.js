const reqOption = require('../requireOption');

/**
 * getUsers
 * @param objectrepository
 * @returns users data from db
 */
module.exports = function (objectrepository) {
    //const UserModel = reqOption(objectrepository, 'UserModel');
    return function (req, res, next) {

        objectrepository.User.find({}, (err, users) => {
            if(err) {
                return res.redirect('/add_user');
            }
            res.locals.users = users;
            return next();
        });

        /*
        res.locals.users = [
            {id:1, name:"Gergő", revtag:"@buji9", color:"red"},
            {id:2, name:"Marci", revtag:"N/A", color:"blue"},
            {id:3, name:"Kristóf", revtag:"@minta", color:"teal"},
            {id:4, name:"Máté", revtag:"@mozsarmate", color:"yellow"}
        ];
        return next();
        */
    };
};