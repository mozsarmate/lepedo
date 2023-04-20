/**
 * getUsers
 * @param objectrepository
 * @returns users data from db
 */
module.exports = function (objectrepository) {
    return function (req,res,next) {
        res.locals.users = [
            {id:1, name:"Gergő", revtag:"@buji9", color:"red"},
            {id:2, name:"Marci", revtag:"N/A", color:"teal"},
            {id:3, name:"Kristóf", revtag:"@minta", color:"orange"},
            {id:4, name:"Máté", revtag:"@mozsarmate", color:"green"}
        ];
        return next();
    }
}