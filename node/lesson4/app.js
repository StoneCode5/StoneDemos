var express = require('express');
var cheerio = require('cheerio')
var superagent = require('superagent')
var eventproxy = require('eventproxy')
var url = require('url');
var app = express();

var items = []
var urls = []

var getLinkUrl = function () {

}
// getLinkUrl()

var defaultHanlde = function (req, res) {
    // 得到首页上所有的item
    superagent.get('https://cnodejs.org/')
        .then(function (r) {
            // res.body, res.headers, res.status
            var text = r.text
            var $ = cheerio.load(text)
            // var $ = cheerio.load(sres.text);
            $('#topic_list .topic_title').each(function (idx, element) {
                var $element = $(element);
                urls.push(
                    // title: $element.attr('title'),
                    url.resolve('https://cnodejs.org/', $element.attr('href'))
                );
            });
            var proxy = new eventproxy()
            var  j = 0
            console.log('urlslength', urls.length)
            urls.forEach(function (v, i) {
                superagent.get(v) //   这个地方用then的话，会出现ajax请求不完全的情况。
                    .end(function (res) {
                        console.log('item' + v + '序号' + j++)
                        
                    })
            })
            res.send(items)

        })
        .catch(function (e) {
            // err.message, err.response
        })
}
app.get('/', function (req, res) {
    defaultHanlde(req, res)
})

app.listen('3000', function (req, res) {
    console.log('app is running at port 3000')
})