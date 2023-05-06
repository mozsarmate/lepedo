//TODO normalize is_wrong functions

function name_is_wrong(name) {
   return name.length < 3 || name.length > 15;
}

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
 * saveExpense
 * @param objectrepository
 * @param id
 * saves expense data to db (both create and edit)
 * @returns next
 */
module.exports = function (objectrepository, id) {
    return function (req, res, next) {
        if (typeof req.body.name === "undefined" ||
            typeof req.body.date === "undefined" ||
            typeof req.body.amount === "undefined" ||
            typeof req.body.payed === "undefined" ||
            typeof req.body.payedto === "undefined") {
            return next();
        }
        //data check
        if (name_is_wrong(req.body.name) ||
            amount_is_wrong(req.body.amount) ||
            date_is_wrong(req.body.date) ||
            payed_is_wrong(req.body.date) ||
            payedto_is_wrong(req.body.date)) {
        }

        if(typeof res.locals.expense === "undefined"){
            res.locals.expense = new objectrepository.Expense;
        }

        res.locals.expense.name = req.body.name;
        res.locals.expense.date = req.body.date;
        res.locals.expense.amount = req.body.amount;
        res.locals.expense.userfrom = req.body.payed;
        res.locals.expense.userto = [];

        res.locals.users.forEach(element =>{
            console.log(element);
            if (req.body.payedto.includes(element._id)) {
                console.log("goes in");
                res.locals.expense.userto.push(element._id);
            }
        })
        console.log(res.locals.expense);

        res.locals.expense.save(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/list');
        })
    }
}