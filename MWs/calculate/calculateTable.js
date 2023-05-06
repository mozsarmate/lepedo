/**
 * calculateTable
 * @param objectrepository, transfer id
 * transfers summary data to the table on the frontend
 * @returns next
 */
module.exports = function (objectrepository) {
    return function (req,res,next) {
        let u = res.locals.users;
        let e = res.locals.expenses;
        let t = res.locals.transfers;
        let final = [];
        u.forEach(cur => {
            let curfinal = {uid:cur._id, spent:0, paid:0, transferfrom:0, transferto:0, balance:0};
            e.forEach(cure => {
                console.log(cure);
                if (cure.userfrom === cur._id) {
                    
                    curfinal.paid += cure.amount;

                }
                if (cure.userto.includes(cur._id)) {
                    curfinal.spent += Math.round((cure.amount) / cure.userto.length);
                }
            });
            t.forEach(curt => {
                if (curt.userfrom === cur._id){
                    curfinal.transferfrom += curt.amount;
                }
                if (curt.userto === cur._id){
                    curfinal.transferto += curt.amount;
                }
            });
            curfinal.balance = curfinal.paid - curfinal.spent + curfinal.transferfrom - curfinal.transferto;
            final.push(curfinal);
        });
        res.locals.final = final;
        console.log(final);
        return next();
    }
}