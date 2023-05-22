const getUserMW = require('../MWs/user/getUser.js');
const getUsersMW = require('../MWs/user/getUsers.js');
const saveUserMW = require('../MWs/user/saveUser.js');
const delUserMW = require('../MWs/user/delUser.js');

const getExpenseMW = require('../MWs/expense/getExpense.js');
const getExpensesMW = require('../MWs/expense/getExpenses.js');
const saveExpenseMW = require('../MWs/expense/saveExpense.js');
const saveMultipleExpensesMW = require('../MWs/expense/saveMultipleExpenses.js');
const delExpenseMW = require('../MWs/expense/delExpense.js');

const getTransferMW   = require('../MWs/transfer/getTransfer.js');
const getTransfersMW  = require('../MWs/transfer/getTransfers.js');
const saveTransferMW  = require('../MWs/transfer/saveTransfer.js');
const delTransferMW   = require('../MWs/transfer/delTransfer.js');

const calculateStatMW = require('../MWs/calculate/calculateStat.js');
const calculateTableMW = require('../MWs/calculate/calculateTable.js');

const renderMW = require('../MWs/render/render.js');
const redirectMW = require('../MWs/render/redirect.js');

const trysave = require('../MWs/render/trysave');


//importing models as well HERE
const User = require('../models/userModel');
const Expense = require('../models/expenseModel');
const Transfer = require('../models/transferModel');

module.exports = function(app){
    const objRepo = {
        User : User,
        Expense : Expense,
        Transfer : Transfer,
    };

    app.get('/list',
        getUsersMW(objRepo),
        getExpensesMW(objRepo),
        getTransfersMW(objRepo),
        calculateStatMW(objRepo,'list'),
        renderMW(objRepo,'list'));

    app.get('/summary',
        getUsersMW(objRepo),
        getExpensesMW(objRepo),
        getTransfersMW(objRepo),
        calculateTableMW(objRepo),
        calculateStatMW(objRepo,'summary'),
        renderMW(objRepo,'summary'));


//add functions
    app.use('/add_user',
        //getUserMW(objRepo),
        saveUserMW(objRepo),
        renderMW(objRepo,'add_user'));

    app.use('/add_expense',
        getUsersMW(objRepo),
        //getExpenseMW(objRepo),
        saveExpenseMW(objRepo),
        renderMW(objRepo,'add_expense'));

    app.use('/add_transfer',
        getUsersMW(objRepo),
        //getTransferMW(objRepo),
        saveTransferMW(objRepo),
        renderMW(objRepo,'add_transfer'));


//edit funcitions
    app.use('/edit_user/:userid',
        getUserMW(objRepo),
        saveUserMW(objRepo),
        renderMW(objRepo,'add_user'));

    app.use('/edit_expense/:expenseid',
        getUsersMW(objRepo),
        getExpenseMW(objRepo),
        saveExpenseMW(objRepo),
        renderMW(objRepo,'add_expense'));

    app.use('/edit_transfer/:transferid',
        getUsersMW(objRepo),
        getTransferMW(objRepo),
        saveTransferMW(objRepo),
        renderMW(objRepo,'add_transfer'));

//delete funcitions
    app.get('/delete_user/:userid',
        getUsersMW(objRepo),
        getExpensesMW(objRepo),
        getTransfersMW(objRepo),
        getUserMW(objRepo),
        delUserMW(objRepo),
        redirectMW(objRepo,'/summary'));

    app.get('/delete_expense/:expenseid',
        getExpenseMW(objRepo),
        delExpenseMW(objRepo),
        redirectMW(objRepo,'/list'));

    app.get('/delete_transfer/:transferid',
        getTransferMW(objRepo),
        delTransferMW(objRepo),
        redirectMW(objRepo,'/list'));

    app.get('/demosave',
        trysave(objRepo),
        redirectMW(objRepo,'/summary')
    );

    app.use('/convert',
        getUsersMW(objRepo),
        saveMultipleExpensesMW(objRepo),
        renderMW(objRepo,'convert')
    );

    app.get('/',
        redirectMW(objRepo, '/summary'));

    app.get('/error/501',(req,res,next) => {
        res.status(501).sendFile(__dirname+'/error/501.html');
    });

    app.get('/error/204',(req,res,next) => {
        res.status(204).sendFile(__dirname+'/error/204.html');
    });

    app.get('/error/404',(req,res,next) => {
        res.status(404).sendFile(__dirname+'/error/404.html');
    });


    app.use((err, req, res, next) => {
        console.log('error detected', err);
        if (err.status === 204) {
            console.log("Error 204");
            res.status(404).sendFile(__dirname + '/error/204.html');
        }
        else if (err.status === 405) {
            console.log("Error 405");
            res.status(405).sendFile(__dirname + '/error/405.html');
        }
    });


    app.get('*',(req, res, next) => {
        res.status(404).sendFile(__dirname+'/error/404.html');
    });

}
