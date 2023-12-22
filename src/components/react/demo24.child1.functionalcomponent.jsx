import React, { useContext } from "react"
import MyContext from "./demo24.context"
export default function ChildComponent() {
  // functional component 提供hook函数，直接使用
  let { val } = useContext(MyContext)
  return <div>{val}</div>
}
