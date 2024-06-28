const express = require('express');
const app = express();
const config = require('./config.js');

//routes 
const apiRouter = require('./routes/api.js')

app.use('/', apiRouter);

app.get('/', function (request, response) {
    response.send('Serwer działa!');
});

app.listen(config.port, function(){
    console.log('Serwer słucha... http://localhost:'+config.port);
});