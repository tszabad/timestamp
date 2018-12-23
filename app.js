

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/:dateVal', (req,res,next)=>{
var dateVal = req.params.dateVal;
var formatDate = {year:'numeric', month: 'long', day:'numeric'};

if(isNaN(dateVal)){
    var nDate = new Date(dateVal);
    nDate = nDate.toLocaleDateString("en-us", formatDate);
    var unixDate = new Date(dateVal).getTime()/1000;
    
}
else {
    var nDate = new Date(dateVal * 1000);
    nDate = nDate.toLocaleDateString("en-us", formatDate);
    var unixDate = dateVal;
}

res.json({unix: unixDate, natural:nDate})
});

app.listen(3000);
