var express = require('express');
var cheerio = require('cheerio')
var superagent = require('superagent') // 用来发送http请求的库
var axios = require('axios')// 用axios也是可以的
var app = express();
var url = require('url')
// 获取html的属性值 $(selector).attr()
// $(selector).each(function(index, ))
app.get('/', function (req, res) {
    superagent.get('https://cnodejs.org/')
        .then(function (r) {
            console.log('here')

            // res.body, res.headers, res.status
            var text = r.text
            var $ = cheerio.load(text)

            // var $ = cheerio.load(sres.text);
            var items = [];

            $('#topic_list .topic_title').each(function (idx, element) {
                var $element = $(element);
                items.push({
                    title: $element.attr('title'),
                    href: $element.attr('href')
                });
            });
            // for(var i = 0; i < items.length; i++){
            //     axios.get('https://cnodejs.org/')
            // }
            var j = 0
            items.forEach(function (v, i) {
                superagent.get(url.resolve('https://cnodejs.org/', v.href))
                    .then(function (itemR) {
                        console.log(j++, items.length)
                    }).catch(function(){
                        
                    })
            })
            res.send(items)
        })
        .catch(function (e) {
            // err.message, err.response
        })
})

app.listen('3000', function (req, res) {
    console.log('app is running at port 3000')
})