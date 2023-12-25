import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { supportAction, disapprovalAction } from "./store/features/vote.slice"

const wait = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })
}

export default function Footer() {
  // 从store上下文中获取公共状态
  const { supportNum, disapprovalNum } = useSelector((state) => state.vote)
  // dispatch方法
  const dispatch = useDispatch()

  const support = async () => {
    // 派发行为对象-支持异步
    // dispatch(async (dp) => {
    //   await wait()
    //   dp(supportAction("支持"))
    // })
    await wait()
    dispatch(supportAction("支持"))
  }

  const disapproval = () => {
    // 派发行为对象
    dispatch(disapprovalAction("反对"))
  }

  return (
    <div>
      <div>总计人数：{supportNum + disapprovalNum}</div>
      <button onClick={support}>支持</button>
      &nbsp;
      <button onClick={disapproval}>反对</button>
    </div>
  )
}
