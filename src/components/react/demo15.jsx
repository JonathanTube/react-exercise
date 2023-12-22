import React, { useEffect, useLayoutEffect, useState } from "react"

export default function Demo() {
  let [val, setVal] = useState(0)

  useEffect(() => {
    console.log("useEffect后执行")
  }, [val])

  useLayoutEffect(() => {
    console.log("useLayoutEffect先执行，在dom元素渲染完成前就会执行完毕")
  }, [val])

  const handler = () => {
    setVal(val + 1)
  }
  return (
    <>
      <div>{val}</div>
      <button onClick={handler}>hello</button>
    </>
  )
}
