var express = require('express');
var cheerio = require('cheerio')
var superagent = require('superagent')
var eventproxy = require('eventproxy')
var url = require('url');
var cnodeUrl = 'https://cnodejs.org/';

superagent.get(cnodeUrl)
  .end(function (err, res) {
    if (err) {
      return console.error(err);
    }
    var topicUrls = [];
    var $ = cheerio.load(res.text);
    $('#topic_list .topic_title').each(function (idx, element) {
      var $element = $(element);
      var href = url.resolve(cnodeUrl, $element.attr('href'));
      topicUrls.push(href);
    });

    // var ep = new eventproxy();

    // ep.after('topic_html', topicUrls.length, function (topics) {
    //   topics = topics.map(function (topicPair) {
    //     var topicUrl = topicPair[0];
    //     var topicHtml = topicPair[1];
    //     var $ = cheerio.load(topicHtml);
    //     return ({
    //       title: $('.topic_full_title').text().trim(),
    //       href: topicUrl,
    //       comment1: $('.reply_content').eq(0).text().trim(),
    //     });
    //   });

    //   console.log('final:');
    //   console.log(topics);
    // });
    console.log(topicUrls.length)
    var ij = 0
    topicUrls.forEach(function (topicUrl) {
      superagent.get(topicUrl)
        .end(function (err, res) {
          console.log('fetch ' + topicUrl + ' successful' + ij++);
        //   ep.emit('topic_html', [topicUrl, res.text]);
        });
    });
  });