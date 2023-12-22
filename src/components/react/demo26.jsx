import React from "react"
import { createUseStyles } from "react-jss"

/**
 * 使用react-jss创建自定义css
 */
const useStyles = createUseStyles({
  box: {
    backgroundColor: "blue",
    width: "200px",
    height: "200px",
  },
  main: (props) => {
    // 在最外层可以使用传入的props进行css拼接
    // 可以实现css in js的动态控制
    return {
      "& a": {
        color: props.color,
      },
    }
  },
})

export default function Demo() {
  // 执行useStyles函数
  let { box, main } = useStyles({
    // 并且传递参数
    color: "red",
  })
  return (
    <div className={box}>
      <div className={main}>
        <a>link href</a>
      </div>
    </div>
  )
}
