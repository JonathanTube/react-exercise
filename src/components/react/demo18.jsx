import React, { useState, useMemo } from "react"

export default function TotalAmount() {
  const [price, setPrice] = useState(1)
  const [quantity, setQuantity] = useState(1)

  const [val, setVal] = useState(0)

  const totalAmount = useMemo(() => {
    console.log("只有当price和quantity变化的时候", "才会重新执行函数")
    console.log("在比较耗时的计算场景下，保证了性能")
    return price * quantity
  }, [price, quantity])

  const increasePrice = () => {
    setPrice(price + 1)
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  // 这里的变化，不会影响useMemo中的回调函数执行执行
  // 因为没有依赖val
  const increaseVal = () => {
    setVal(val + 1)
  }

  return (
    <div>
      <div>
        total amount：{price}×{quantity} = {totalAmount}
      </div>
      <button onClick={increasePrice}>increase price</button>
      <button onClick={increaseQuantity}>increase quantity</button>
      <button onClick={increaseVal}>increase val, {val}</button>
    </div>
  )
}
