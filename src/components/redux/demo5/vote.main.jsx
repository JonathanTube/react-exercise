import React from "react"
import { useSelector } from "react-redux"

const Main = () => {
  let { supportNum, disapprovalNum } = useSelector((state) => state.vote)
  return (
    <div>
      <div>支持数：{supportNum}</div>
      <div>反对数：{disapprovalNum}</div>
    </div>
  )
}
export default Main
