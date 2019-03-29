/*let http = require('http');
var app = require('./app');

const PORT = process.env.PORT || 3000

http.createServer(app.handleRequest).listen(PORT, (error) => {
	if (error)
		return console.log(error)
  console.log(`Server is listening on PORT ${PORT} CNTL-C to quit`)
})
*/
const PORT = process.env.PORT || 3000
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var data;
var user;
var a1;
var a2;
var a3;
var email_pass = "dummy";
var bank_pass = "dummy";
var shopping_pass = "dummy";
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', "ejs");

app.get('/', function(req, res){
	data = {passwords:['email','banking','shopping']};
	a1 = 0;
	a2 = 0;
	a3 = 0;
	user = {attempts:[a1,a2,a3]};
	data = {passwords : data.passwords, user : user}
	res.render('home',{data : data});
});

app.get('/home', function(req,res){
	data = {passwords:['email','banking','shopping']};
	var shuffled = data.passwords;
	for (let i = shuffled.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // swap elements
	}
	data = {passwords:shuffled};
	a1 = 0;
	a2 = 0;
	a3 = 0;
	user = [a1,a2,a3];
	data = {passwords : data.passwords, user : user}
	res.render('index' ,{data : data});
	console.log("GET from home");
})

app.get('/index', function(req, res){
	data = {passwords:['email','banking','shopping']};
	var shuffled = data.passwords;
	for (let i = shuffled.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // swap elements
	}
	data = {passwords:shuffled};
	a1 = 0;
	a2 = 0;
	a3 = 0;
	user = [a1,a2,a3];

	data = {passwords : data.passwords, user : user}
	res.render('index',{data : data});
	console.log("GET");
});

app.post('/index',urlencodedParser,function(req, res){
	if(req.body.email_pass != undefined){
		var email_pass_attempt = req.body.email_pass;
		if(email_pass_attempt != email_pass){

		}
		console.log("email");

	}
	else if(req.body.bank_pass != undefined){
		console.log("banking");
	}
	else if(req.body.shop_pass  != undefined){
		console.log("shopping");
	}
	a1++;
	user[0] = a1;

	data = {passwords : data.passwords, user : user}
	res.render('index' ,{data : data});
	console.log("POST");
});

app.listen(PORT, (error) => {
	if (error)
		return console.log(error)
  console.log(`Server is listening on PORT ${PORT} CNTL-C to quit`)
})
