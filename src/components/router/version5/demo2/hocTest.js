const func1 = (obj) => {
  return (props) => {
    return Object.assign({}, obj, props)
  }
}

let result = func1({ a: 1, b: 2 })({ c: 3 })
console.log(result)
