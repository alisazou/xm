var express = require('express');
var router = express.Router();



module.exports = function(app) {
    app.get('/', function (req, res) {
        res.render('index', { title: 'Express' });
    });
    app.get('/add', function (req, res) {
        res.render('add', {title: '主页'});
    });

};


