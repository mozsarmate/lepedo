
const usermodel = require('./models/userModel.js');
const expensemodel = require('./models/expenseModel.js');
const transfermodel = require('./models/transferModel.js');

let cu = new usermodel();
cu.id = 4;
cu.name = "alma";
cu.color = "red";
cu.revtag = "bujdi9";
let output;
(async() => {
    output = await cu.save();
});
console.log(output);
console.log("minden ok");
/*

var express = require('express');
const path = require("path");
var app = express();


app.set("view engine","ejs");
app.use(express.static(path.join(__dirname, 'public')));

//Load routing
require('./route/index')(app);

//deprecated routing is down here
/*


app.get('/list',(req, res, next) => {
    res.sendFile(__dirname+"/list.ejs");
});
app.get('/',(req, res, next) => {
    res.sendFile(__dirname+"/summary.ejs");
});
app.get('/summary',(req, res, next) => {
    res.sendFile(__dirname+"/summary.ejs");
});
app.get('/add_user',(req, res, next) => {
    res.sendFile(__dirname+"/add_user.ejs");
});
app.get('/add_expense',(req, res, next) => {
    res.sendFile(__dirname+"/add_expense.ejs");
});
app.get('/add_transfer',(req, res, next) => {
    res.sendFile(__dirname+"/add_transfer.ejs");
});

//edit funcitions
app.get('/edit_user',(req, res, next) => {
    res.status(501).sendFile(__dirname+'/error/501.html');
});
app.get('/edit_expense',(req, res, next) => {
    res.status(501).sendFile(__dirname+'/error/501.html');
});
app.get('/edit_transfer',(req, res, next) => {
    res.status(501).sendFile(__dirname+'/error/501.html');
});

//edit funcitions
app.get('/delete_user',(req, res, next) => {
    res.status(501).sendFile(__dirname+'/error/501.html');
});
app.get('/delete_expense',(req, res, next) => {
    res.status(501).sendFile(__dirname+'/error/501.html');
});
app.get('/delete_transfer',(req, res, next) => {
    res.status(501).sendFile(__dirname+'/error/501.html');
});

app.get('*',(req, res, next) => {
    res.status(404).sendFile(__dirname+'/error/404.html');
});
*/

/*
app.listen(3000,()=>{
    console.log("esku megy");
});*/