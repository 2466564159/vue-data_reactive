import observe from "./observe"

export default function defineReactive(data, key, val) {
  if (arguments.length == 2) val = data[key]

  // 子元素要进行observe，至此形成递归。这个递归不是函数自己调用自己，而是多个函数，类循环调用
  let childOb = observe(val)

  Object.defineProperty(data, key, {
    // 可枚举
    enumerable: true,
    // 可配置
    configurable: true,

    get() {
      return val
    },

    set(newVal) {
      if (val === newVal) return
      val = newVal
      // 当设置了新值，这个新值也要被observe
      childOb = observe(newVal)
    }
  })
}