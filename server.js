const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('.'));

app.get('/', function(req,res) {
	res.send("Test");
});

app.listen(process.env.PORT || 8080);