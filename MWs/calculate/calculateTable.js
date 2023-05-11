/**
 * calculateTable
 * @param objectrepository, transfer id
 * transfers summary data to the table on the frontend
 * @returns next
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {
        let u = res.locals.users;
        let e = res.locals.expenses;
        let t = res.locals.transfers;
        let final = {};
        u.forEach(cur => {
            final[cur._id] = {spent: 0, paid: 0, transferfrom: 0, transferto: 0, balance: 0, deleteable: 1};
        });

        //calculate the first 2 col
        e.forEach(cure => {
            final[cure.userfrom._id].paid += cure.amount;
            final[cure.userfrom._id].deleteable = 0;
            cure.userto.forEach(curuserto => {
                final[curuserto._id].spent += Math.ceil(cure.amount / cure.userto.length);
                final[curuserto._id].deleteable = 0;
            });
        });

        //calculate the sec 2 col
        t.forEach(curt => {
            final[curt.userfrom._id].transferfrom += curt.amount;
            final[curt.userto._id].transferto += curt.amount;
            final[curt.userfrom._id].deleteable = 0;
            final[curt.userto._id].deleteable = 0;
        });

        //calculate final balance
        u.forEach(cur => {
            final[cur._id].balance = final[cur._id].paid - final[cur._id].spent + final[cur._id].transferfrom - final[cur._id].transferto;
        });


        res.locals.final = final;
        return next();
    }
}