var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var Prompt = require('./promptController.js');
var app = express();
var mongoURI = 'mongodb://' + process.env.ID + ':' + process.env.PASS + '@ds029615.mongolab.com:29615/promptsv2';
mongoose.connect(mongoURI);
mongoose.connection.once('open', function() {
	console.log('Connected with MongoLab');
});

//  Created for possible back-end storage of tutorial prompts data
// app.post('/prompts', function(req, res) {
//   console.log(path.join(__dirname, '/prompts.json'));
//   res.sendFile(path.join(__dirname, '/prompts.json'));
// });

app.get("/prompts", Prompt.findPrompts);
// app.post("/prompts", Prompt.postPrompts);

app.use(express.static(__dirname));


app.listen(process.env.PORT || 5000);

// @ds027835.mongolab.com:27835/prompts
// mongodb://<dbuser>:<dbpassword>@ds029615.mongolab.com:29615/promptsv2
