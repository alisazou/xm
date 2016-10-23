var express = require('express');
var router = express.Router();



module.exports = function(app) {
    app.get('/', function (req, res) {
        res.render('index', { title: '排期表' });
    });
    app.get('/add', function (req, res) {
        res.render('add', {title: '添加项目'});
    });
    app.get('/login', function (req, res) {
        res.render('login', {title: '登录'});
    });
};


