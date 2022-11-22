import observe from "./observe"

const obj = {
  a: {
    m: {
      n: 5
    }
  },

  b: 'bbb'
}

observe(obj)

console.log(obj)
obj.a.m = 2
console.log(obj)