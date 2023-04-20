/**
 * getUser
 * @param objectrepository, user id
 * @returns specific user data from db
 */
module.exports = function (objectrepository) {
    return function (req,res,next) {
        res.locals.user = {id:1, name:"Gergő", revtag:"@buji9", color:"red"};
        return next();
    }
}