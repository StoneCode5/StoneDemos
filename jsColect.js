// 获取当前时间 '2014-03-08'
var date = new Date();
var year = date.getFullYear();
var originMonth = date.getMonth() + 1;
var originDay = date.getDate();
var month = PrefixInteger(originMonth, 2)
var day = PrefixInteger(originDay, 2)

var create_date = year + '-' + month + '-' + day