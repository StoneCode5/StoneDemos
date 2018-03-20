var express = require('express');
var utility = require('utility')
var app = express();
// 通过req.query来获得浏览器get传递的参数.
app.get('/', function(req, res){
    var q = req.query.q
    var md5Value = utility.sha1(q) // 获取到相应的参数,然后处理.然后通过res.send()来输出给浏览器
    res.send(md5Value)
})

app.listen('3000', function(req, res){
    console.log('app is running at port 3000')
})