const express = require('express');
const app = express();
const {port}  = require('./config.js');
const apiRouter = require('./routes/api.js')

// database
require('./database/mongoose.js');

//routes 
app.use('/', apiRouter);

app.get('/', function (request, response) {
    response.send('Serwer działa!');
});

app.listen(port, function(){
    console.log('Serwer słucha... http://localhost:'+port);
});