const getUserMW = require('../MWs/user/getUser.js');
const getUsersMW = require('../MWs/user/getUsers.js');
const saveUserMW = require('../MWs/user/saveUser.js');
const delUserMW = require('../MWs/user/delUser.js');

const getExpenseMW = require('../MWs/expense/getExpense.js');
const getExpensesMW = require('../MWs/expense/getExpenses.js');
const saveExpenseMW = require('../MWs/expense/saveExpense.js');
const delExpenseMW = require('../MWs/expense/delExpense.js');

const getTransferMW = require('../MWs/transfer/getTransfer.js');
const getTransfersMW = require('../MWs/transfer/getTransfers.js');
const saveTransferMW = require('../MWs/transfer/saveTransfer.js');
const delTransferMW = require('../MWs/transfer/delTransfer.js');

const calculateStatMW = require('../MWs/calculate/calculateStat.js');
const calculateTableMW = require('../MWs/calculate/calculateTable.js');

const renderMW = require('../MWs/render/render.js');
const redirectMW = require('../MWs/render/redirect.js');


// TODO importing models as well HERE


module.exports = function(app){
    const objRepo = {
        // TODO assinging models HERE
    }

    app.get('/list',
        getUsersMW(objRepo),
        getExpensesMW(objRepo),
        getTransfersMW(objRepo),
        calculateStatMW(objRepo),
        renderMW(objRepo,'list'));

    app.get('/',
        getUsersMW(objRepo),
        getExpensesMW(objRepo),
        getTransfersMW(objRepo),
        calculateStatMW(objRepo),
        calculateTableMW(objRepo),
        renderMW(objRepo,'summary'));

    app.get('/summary',
        getUsersMW(objRepo),
        getExpensesMW(objRepo),
        getTransfersMW(objRepo),
        calculateStatMW(objRepo),
        calculateTableMW(objRepo),
        renderMW(objRepo,'summary'));


//add functions
    app.use('/add_user',
        saveUserMW(objRepo, -1),
        renderMW(objRepo,'add_user'));

    app.use('/add_expense',
        getUsersMW(objRepo),
        saveExpenseMW(objRepo, -1),
        renderMW(objRepo,'add_expense'));

    app.use('/add_transfer',
        getUsersMW(objRepo),
        saveTransferMW(objRepo, -1),
        renderMW(objRepo,'add_transfer'));


//edit funcitions
    app.use('/edit_user/:userid',
        getUserMW(objRepo),
        saveUserMW(objRepo, -1),
        renderMW(objRepo,'add_user'));

    app.use('/edit_expense/:expenseid',
        getExpenseMW(objRepo),
        saveExpenseMW(objRepo, -1),
        renderMW(objRepo,'add_expense'));

    app.use('/edit_transfer/:transferid',
        getTransferMW(objRepo),
        saveTransferMW(objRepo, -1),
        renderMW(objRepo,'add_transfer'));

//delete funcitions
    app.get('/delete_user/:userid',
        getUserMW(objRepo),
        delUserMW(objRepo, -1),
        redirectMW(objRepo,'/summary'));

    app.get('/delete_expense/:expenseid',
        getExpenseMW(objRepo),
        delExpenseMW(objRepo, -1),
        redirectMW(objRepo,'/summary'));

    app.get('/delete_transfer/:transferid',
        getTransferMW(objRepo),
        delTransferMW(objRepo, -1),
        redirectMW(objRepo,'/list'));


    app.get('*',(req, res, next) => {
        res.status(404).sendFile(__dirname+'/error/404.html');
    });



}