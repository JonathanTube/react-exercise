import { Link, useHistory } from "react-router-dom"
export default function From() {
  let history = useHistory()

  return (
    <>
      <h1>From Component</h1>
      <Link
        to={{
          pathname: "/to",
          search: "param=x", // 参数
          state: {}
        }}
      >
        Link跳转-可回退
      </Link>

      <br />

      <Link
        to={{
          pathname: "/to",
          search: "param=x", // 参数
          state: {}
        }}
        replace
      >
        Link跳转-repalce不可回退
      </Link>

      <br />

      <button
        onClick={() => {
          history.push("/to?param0=x&param1=y")
        }}
      >
        编程式跳转-问号传参
      </button>

      <br />

      <button
        onClick={() => {
          history.push({
            pathname: "/to",
            search: "param0=1&param1=2"
          })
        }}
      >
        编程式跳转-search传参(出现在url上，长度限制2K等问题)
      </button>

      <br />
      <button
        onClick={() => {
          history.push(`/to/x/y`)
        }}
      >
        编程式跳转-路由路径传参
      </button>

      <br />
      <button
        onClick={() => {
          history.push({
            pathname: "/to",
            state: {
              param0: "x",
              param1: "y"
            }
          })
        }}
      >
        编程式跳转-hide方式传参
      </button>
    </>
  )
}
