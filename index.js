const express = require('express');
const http = require('http');

const app = express();

try{

require('./prod')(app);

//const hostname = 'http://covidsimpact.herokuapp.com';

app.use(express.static(__dirname+'/public'));

app.use((req,res,next) =>{
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>Error 404: NOT FOUND!</h1></body></html>');
});

}
catch(err){
    console.log(err.message);
}

app.listen(process.env.PORT, () =>{
    console.log(`server running on port: ${process.env.PORT}`);

});