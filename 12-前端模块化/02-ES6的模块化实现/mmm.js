// 1.导入 {} 中定义的变量
import {flag, sum} from "./aaa.js"

if (flag) {
  console.log('小明是天才')
  console.log(sum(10, 20))
}

// 2.直接导入export定义的变量
import {num1, height} from "./aaa.js"
console.log(num1, height)

// 3.导入export的function
import {mul, Person} from "./aaa.js"
console.log(mul(10, 20))

const person = new Person()
person.run()

// 4.导入export default中的内容
// import addr from "./aaa.js"
// console.log(addr)

import myFunc from "./aaa.js"
myFunc('hello')

// 5.统一全部导入
// import {flag, sum, num1, height, mul, Person, myFunc} from "./aaa.js"

import * as aaa from "./aaa.js"
console.log(aaa.flag)