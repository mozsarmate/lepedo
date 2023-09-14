var express = require('express');
const path = require("path");
const Darkmode = require('darkmode-js');
const dotenv = require('dotenv');
dotenv.config();
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine","ejs");

//Load routing
require('./route/index')(app);





//----------------

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


app.listen(3000,()=>{
    console.log("esku megy");
});