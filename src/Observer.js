import { def } from './utils'
import defineReactive from './defineReactive'

// 将object的每个属性都执行defineReactive，包括嵌套属性
export default class Observer {
  constructor(value) {
    // 给value添加__ob__属性，值是this实例，不可枚举
    def(value, '__ob__', this, false)
    
    this.walk(value)
  }

  // 遍历
  walk(value) {
    for (const key in value) {
      defineReactive(value, key)
    }
  }
}