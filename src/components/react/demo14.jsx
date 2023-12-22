import React, { useEffect } from "react"

/**
 * 模拟从服务器获取数据
 *
 * @returns
 */
const getDataFromServer = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(10)
    })
  })
}
export default function Demo() {
  /**
   * 视频说这种会报错，但是当前版本17中并没有报错
   */
  useEffect(async () => {
    let result = await getDataFromServer()
    console.log("1=>", result)
  }, [])
  /**
   * 保持callback函数不变
   * 内部使用匿名异步函数
   */
  useEffect(() => {
    let next = async () => {
      let result = await getDataFromServer()
      console.log("2=>", result)
    }
    next()
  }, [])
  /**
   * 使用then
   */
  useEffect(() => {
    getDataFromServer().then((res) => {
      console.log("3=>", res)
    })
  })
  return <div></div>
}
