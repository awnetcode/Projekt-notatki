const express = require('express');
const app = express();
const config = require('./config.js');
const apiRouter = require('./routes/api.js')

// database
require('./database/mongoose.js');

//routes 
app.use('/', apiRouter);

app.get('/', function (request, response) {
    response.send('Serwer działa!');
});

app.listen(config.port, function(){
    console.log('Serwer słucha... http://localhost:'+config.port);
});