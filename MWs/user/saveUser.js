function data_is_not_ok(input){
    //maybe other exceptions filtered out here
    if (input === '') return true;
}



const colors = Array('red', 'green', 'orange', 'teal', 'yellow', 'purple', 'blue');
/**
 * saveUser
 * @param objectrepository
 * saves user data to db (both create and edit)
 * @returns next
 */
module.exports = function (objectrepository) {
    return function (req,res,next) {
        if (typeof req.body.name === 'undefined' || typeof req.body.revtag === 'undefined' || data_is_not_ok(req.body.name))
            return next();

        if(typeof res.locals.user == "undefined"){
            res.locals.user = new objectrepository.User;
        }

        res.locals.user.name = req.body.name;
        res.locals.user.revtag = req.body.revtag;
        res.locals.user.color = colors[(req.body.name.charCodeAt(0)+req.body.name.charCodeAt(2))%colors.length];

        res.locals.user.save(err => {
           if (err) {
               return next(err);
           }

           return res.redirect('/summary');
        });
    }
}