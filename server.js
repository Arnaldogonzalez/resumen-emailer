var express = require('express');
var app = express();

app.get("/", function(req,res){
    res.end("thug life");
});

app.get('/kims-mood', function(req, res){
    if(Math.random() > 0.5){
        res.end("Kim Jong Un is thinking about nuclear world destruction");
    }
    else{
        res.end("Kim Jong Un is happily playing NBA Live 2k17 with Dennis Rodman");
    }
});

app.listen(3003);
