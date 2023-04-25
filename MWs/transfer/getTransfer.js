const reqOption = require("../requireOption");
/**
 * getTransfer
 * @param objectrepository, transfer id
 * @returns specific expense data from db
 */
module.exports = function (objectrepository) {
    const TransferModel = reqOption(objectrepository, 'TransferModel');
    return function (req, res, next) {
        TransferModel.findOne({_id: req.params.transferid}, (err, transfer) => {
            if (err || !transfer)
                return next();
            res.locals.transfer = transfer;
            return next();
        });
    };
};