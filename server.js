const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('./dist/iot-control-interface-app'));

app.get('/*', function(req,res) {
	res.sendFile(path.join(__dirname,'/dist/iot-control-interface-app/index.html'));
});

app.listen(process.env.PORT || 8080);