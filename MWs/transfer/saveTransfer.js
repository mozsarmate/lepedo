 function amount_is_wrong(amount) {
     //regex, adom
     let regex = /[0-9]+/i;
     if(!regex.test(amount)) return true;

     return amount < 0 || amount > 10000000;

 }
 function date_is_wrong(date) {
     //hajnali 1 van es nem tudom ilyeneket irok, nem tudom van e eletem
     let regex = /[0-9]{4}-[0-9]{2}-[0-9]{2}/i;
     return !regex.test(date);
 }

 function payed_is_wrong(date) {
     return false;
 }

 function payedto_is_wrong(date) {
     return false;
 }

/**
 * saveTransfer
 * @param objectrepository
 * saves Transfer data to db (both create and edit)
 * @returns next
 */
module.exports = function (objectrepository) {
    return function (req,res,next) {
        if (typeof req.body.date === "undefined" ||
            typeof req.body.amount === "undefined" ||
            typeof req.body.payed === "undefined" ||
            typeof req.body.payedto === "undefined") {
            return next();
        }
        if (amount_is_wrong(req.body.amount) ||
            date_is_wrong(req.body.date) ||
            payed_is_wrong(req.body.date) ||
            payedto_is_wrong(req.body.date)) {
            return next();
        }

        if(typeof res.locals.transfer === "undefined"){
            res.locals.transfer = new objectrepository.Transfer;
        }

        res.locals.transfer.date      = req.body.date;
        res.locals.transfer.amount    = req.body.amount;
        res.locals.transfer.userfrom  = req.body.payed;
        res.locals.transfer.userto    = req.body.payedto;


        res.locals.transfer.save(err => {
           if (err) {
               return next(err);
           }

           return res.redirect('/list');
        });
    }
}