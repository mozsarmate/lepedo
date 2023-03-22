var express = require('express');
const path = require("path");
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/list',(req,res,next) => {
    res.sendFile(__dirname+"/list.html");
});
app.get('/summary',(req,res,next) => {
    res.sendFile(__dirname+"/summary.html");
});
app.get('/add_user',(req,res,next) => {
    res.sendFile(__dirname+"/add_user.html");
});
app.get('/add_expense',(req,res,next) => {
    res.sendFile(__dirname+"/add_expense.html");
});
app.get('/add_transfer',(req,res,next) => {
    res.sendFile(__dirname+"/add_transfer.html");
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

app.get('*',(req,res,next) => {
    res.status(404).sendFile(__dirname+'/error/404.html');
});

app.listen(3000,()=>{
    console.log("esku megy");
});