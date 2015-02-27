var express = require('express');
var router = express.Router();
var app = require('../app');
var XLSX  = require('xlsx');
var q = require('q');
var fs = require('fs');


/* GET home page. */
router.post('/upload', function(req, res, next) {
    var path = app.dirname + '\\' + req.files.file.path;
    console.log(path);
    fs.exists('./' + req.files.file.path, function(exists){
        console.log(exists);
        if(exists){
            var workbook = XLSX.readFile(path);
            var data = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
            res.json(data);
        }else{
            res.json({test:'no'});
        }

    });

    //var workbook =  XLS.readFile(app.dirname  + req.files.file.path);

});

module.exports = router;
