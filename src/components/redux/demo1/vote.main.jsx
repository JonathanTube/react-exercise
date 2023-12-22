import React, { useState, useEffect, useContext } from "react"
import storeContext from "./store/storeContext"

const Main = () => {
  let context = useContext(storeContext)

  let { store } = context

  // 从store中获取公共数据
  let { supportNum, disapprovalNum } = store.getState().vote

  // 1.创建一个state变量，用来触发render
  let [x, setX] = useState(0)

  useEffect(() => {
    // 2.订阅store的变化，每次都需要重新订阅
    // 因为每次执行函数，都是拿的第一次函数闭包中的x=0
    let unsubscribe = store.subscribe(() => {
      setX(x + 1)
    })
    return () => {
      // 3.上一次执行完毕后，调用取消订阅
      unsubscribe()
    }
  }, [x]) // 如果是[]的话只能执行一次，释放了，就不会再订阅了

  /**
   * 方法二
   */
  useEffect(() => {
    store.subscribe(() => {
      // 每次都设置一个随机值
      // 那视图必然要更新，就不依赖X的变化了
      // 第一种方案需要依赖X，取到的永远都是第一次函数上下文中的x=0,导致视图永远不会render
      setX(Math.random())
    })
  }, [])

  return (
    <div>
      <div>支持数：{supportNum}</div>
      <div>反对数：{disapprovalNum}</div>
    </div>
  )
}
export default Main
