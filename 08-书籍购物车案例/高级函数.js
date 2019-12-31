// 编程范式：命令式编程/声明式编程
// 编程范式：面向对象编程/函数式编程
// filter/map/reduce
// filter 中的回调函数有一个要求：必须返回一个boolean值
// true：函数内部会自动将这次回调的n加入的新的数组中
// false：函数内部会自动过滤掉这次的n
const nums = [10, 20, 111, 333, 444, 40, 50]

let total = nums.filter(n => n < 100).map(n => n * 2).reduce((preValue, n) => preValue + n)
console.log(total)

let total = nums.filter(function(n) {
  return n < 100
}).map(function(n) {
  return n*2
}).reduce(function(preValue, n) {
  return preValue + n
})
console.log(total)

// // 1. filter函数的使用
// let newNums = nums.filter(function(n) {
//   return n < 100
// })
// // console.log(newNums)

// // 2.map函数的使用
// let new2Nums = newNums.map(function(n) {
//   return n*2
// })
// // console.log(new2Nums)

// // 3.reduce的使用
// // reduce作用对数组中所有的内容进行汇总
// let total = new2Nums.reduce(function(preValue, n) {
//   return preValue + n
// }, 0)
// console.log(total)

// 第一次： preValue: 0 n:20
// 第二次： preValue: 20 n:40
// 第三次： preValue: 60 n:80
// 第四次： preValue: 140 n:100
//240