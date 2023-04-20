/**
 * getExpenses
 * @param objectrepository
 * @returns all Expense data from db
 */
module.exports = function (objectrepository) {
    return function (req,res,next) {
        res.locals.expenses = [
            {id:1, name:"NuPhy", date:"2023.02.02.", userfrom:1, userto:[1,3], amount:44560 },
            {id:2, name:"Spar", date:"2023.04.02.", userfrom:3, userto:[1,2,4], amount:4296 },
            {id:3, name:"Lidl", date:"2023.04.12.", userfrom:2, userto:[1], amount:2860 },
            {id:4, name:"AK", date:"2023.04.21.", userfrom:1, userto:[3,4], amount:6300 }
        ];
        return next();
    }
}