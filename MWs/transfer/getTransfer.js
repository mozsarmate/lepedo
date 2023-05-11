const reqOption = require("../requireOption");
/**
 * getTransfer
 * @param objectrepository, transfer id
 * @returns specific expense data from db
 */
module.exports = function (objectrepository) {
    //const TransferModel = reqOption(objectrepository, 'TransferModel');
    return function (req, res, next) {
        objectrepository.Transfer.findOne({_id: req.params.transferid}).populate('userfrom').populate('userto').exec((err, transfer) => {
            if (err || !transfer) {
                if(!err){
                    var err2 = new Error("204");
                    err2.status = 204;
                    return next(err2);
                }
                return next(err);
            }
            res.locals.transfer = transfer;
            return next();
        });
    };
};