const obj = {
  x: 1,
  y: 2
}

console.log(obj)

/**
    configurable: 是否可删除
    enumerable: 是否可迭代
    writable: 是否可修改
    value: 数值

    {
        x: { value: 1, writable: true, enumerable: true, configurable: true },
        y: { value: 2, writable: true, enumerable: true, configurable: true }
    }

 */
console.log(Object.getOwnPropertyDescriptors(obj))

Object.defineProperty(obj, "x", {
  configurable: false, // 不能删
  writable: false, // 不能改
  enumerable: false // 不能迭代
})

// delete obj.x
obj.x = 10

console.log(obj)

// get set方法劫持
Object.defineProperty(obj, "y", {
  get() {
    console.log("get value")
    return 0
  },
  set() {
    console.log("set value")
  }
})

console.log(obj.y)
obj.y = 100
