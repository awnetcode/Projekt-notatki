const express = require('express');
const app = express();
const {port}  = require('./config.js');
const apiRouter = require('./routes/api.js')
const bodyParser = require('body-parser');

// database
require('../database/mongoose.js');

//parsery 
//content-type: application/json 
app.use(bodyParser.json());

//routes 
app.use('/api/', apiRouter);

app.get('/', function (request, response) {
    response.send('Serwer działa!');
});

//server
app.listen(port, function(){
    console.log('Serwer słucha... http://localhost:'+port);
});