const reqOption = require('../requireOption');
/**
 * getTransfers
 * @param objectrepository
 * @returns all Transfer data from db
 */
module.exports = function (objectrepository) {
    //const TransferModel = reqOption(objectrepository, 'UserModel');
    return function (req, res, next) {
        objectrepository.Transfer.find({}).populate('userfrom').populate('userto').exec((err, transfers) => {
            if (err || !transfers) {
                return next(err);
            }
            res.locals.transfers = transfers;
            return next();
        });

        /*
        res.locals.transfers = [
            {id:1, date:"2023-04-01", userfrom:4, userto:1, amount:10000 },
            {id:2, date:"2023-04-01", userfrom:3, userto:2, amount:15000 },
            {id:3, date:"2023-04-15", userfrom:2, userto:1, amount:6000 }
        ]
        return next();
        */
    };
};