/**
 * calculateStat
 * @param objectrepository
 * @param page to know what stats we need
 * transfers statistical data to the frontend
 * @returns function(*, *, *): *
 */
module.exports = function (objectrepository, page) {
    return function (req,res,next) {
        if(page === 'list'){
            res.locals.expdb = res.locals.expenses.length;
            res.locals.tradb = res.locals.transfers.length;
        }
        else if(page === 'summary') {
            let spentall = 0;
            res.locals.expenses.forEach(cur => {
                spentall += cur.amount;
            });
            res.locals.spentall = spentall;

            let doneall = 0;
            let curmin = res.locals.final[res.locals.users[0]._id].spent;
            let curminname = res.locals.users[0].name;
            res.locals.users.forEach(cur => {
               if(res.locals.final[cur._id].balance < 0) doneall += res.locals.final[cur._id].balance;
               if(cur.spent < curmin){
                   curmin = cur.spent;
                   curminname = cur.name;
               }
            });
            doneall += spentall;
            res.locals.doneall = doneall;

            res.locals.spentleast = curminname;
        }

        return next();
    }
}