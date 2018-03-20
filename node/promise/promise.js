// var p = Promise.resolve(21);
// p.then(function (v) {
//     console.log(v); // 21             
//     // 用值42完成连接的promise 
//     // return v * 2;
// })
//     // 这里是链接的promise 
//     .then(function (v) {
//         foo()
//         console.log(v); // 42 
//     }).then(function (v) {
//         console.log('here'); // 42 
//     }).catch(function (err) {
//         console.log(err)
//     })

// resolve 相当于 一个then 一个成功的then
// var b = Promise.resolve(21);
// b.then(function (v) {
//     console.log(v); // 21 
//     // 创建一个promise并将其返回
//     return new Promise(function (resolve, reject) {
//         // 用值42填充
//         setTimeout(function () {
//             resolve(v * 2);
//         }, 1000)
//     });
// })
//     .then(function (v) {
//         console.log(v); // 42 
//     });

// function delay(time) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(resolve, time);
//     });
// }
// delay(100) // 步骤1 
//     .then(function STEP2() {
//         foo()
//         console.log("step 2 (after 100ms)");
//         return delay(200);
//     })
//     .then(function STEP3() {
//         console.log("step 3 (after another 200ms)");
//     })
//     .then(function STEP4() {
//         console.log("step 4 (next Job)");
//         return delay(50);
//     })
//     .then(function STEP5() {
//         console.log("step 5 (after another 50ms)");
//     }).catch(function (err) {
//         console.log(err)
//     })


var promise = new Promise(function (resolve, reject) {
    resolve('ok')
    console.log('here')
})
// promise.then(function (v) {
//     console.log(v)
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve(v + 'OK')
//         }, 1000)
//     })

// }).then(function (v) {
//     console.log(v)
// })




