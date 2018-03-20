var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
var multer = require('multer'); // 用于上传的插件
// app.use 就是给当前指定路径增加 中间件用作处理。 没有指定路径时，默认就是‘/’所有路径都会执行这个中间件

app.use(express.static('public')); // app的静态资源的管理  比如我要引入一个JS文件，将JS文件放在public文件夹下面 前端要省略public
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/' }).array('image'));
const upload = require('multer')({ dest: 'uploads/' });

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/" + "index.html");
})

// app.use('/hello', function (req, res, next) {
//     res.send('Hello World');
// })

// // requests will never reach this route
// app.get('/hello', function (req, res) {
//     res.send('Welcome');
// })
// function av() {
//     return b
//     var b = 2 
//     function b () {}
// }

// typeof av
// app.use('/', function (req, res, next) {
//     // GET 'http://www.example.com/admin/new'，admin/下的都可以进入路由,如admin/img,admin/name等
//     console.log(req); // '/admin/new'
//     // console.log(req.baseUrl); // '/admin'
//     // console.log(req.path); // '/new'
//     next();//用来触发下一个中间件，假如这里不调用永远也不会执行到下一步，即本次请求结束了
// })


app.get('/file_upload', function (req, res) {
    res.send("index.html");
})


app.post('/file_upload', function (req, res) {
    // if (!req.file) {
    //     res.json({ ok: false });
    //     return;
    // }
    // console.log(req.files[0]);  // 上传的文件信息
    // console.log(req);  // 上传的文件信息
    // var response = {
    //     message: 'File uploaded successfully',
    //     filename: req.file.originalname
    // };
    // res.send(JSON.stringify(response));

    var des_file = __dirname + "/" + req.files[0].originalname;
    console.log('req.files[0].path', req.files[0].path)
    fs.readFile(req.files[0].path, function (err, data) {
        console.log('data', data)
        fs.writeFile(des_file, data, function (err) {
            if (err) {
                console.log(err);
            } else {
                response = {
                    message: 'File uploaded successfully',
                    filename: req.files[0].originalname
                };
            }
            console.log(response);
            res.send(JSON.stringify(response));
        });
    });
})

var server = app.listen(8081, function () {
    
        var host = server.address().address
        var port = server.address().port
    
        console.log("应用实例，访问地址为 http://%s:%s", host, port)
    
    })