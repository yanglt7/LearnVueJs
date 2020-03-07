import { 
  UPDATEINFO,
  AUPDATEINFO,
 } from "./mutations-types";

export default {
  // context: 上下文 
  // 在这里可以理解成 store
  // [AUPDATEINFO](context, payload) {
  //   setTimeout(() => {
  //     context.commit(UPDATEINFO)
  //     console.log(payload.message);
  //     payload.success()
  //   }, 1000)
  // }

  [AUPDATEINFO](context, payload) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit(UPDATEINFO)
        console.log(payload);
        resolve('11111')
      }, 1000)
    })
  }
}