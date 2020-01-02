;(function () {
  if (moduleA.flag) {
    console.log(moduleA.sum(10, 20))
  }
})()

// commonJS
// var aaa = require('./aaa.js')
// flag = aaa.flag
// sum = aaa.sum

// var {flag, sum} = require('./aaa.js')
// sum(10, 20)