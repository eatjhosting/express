
var express = require('express');
var app = express();
var port=3003;

app.get('/', function (req, res) {
  res.send('Hello World! I am express.');
});

if(port == 0) {
	console.log('Please open index.js and change port number. Your port number (in red) can be found in http://nodejs.eatj.com/account.jsp')
} else {
	app.listen(port, function () {
 		 console.log('URL: http://<username>.nodejs.eatj.com');
	})
}

