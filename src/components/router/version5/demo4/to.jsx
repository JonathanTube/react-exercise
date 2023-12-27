import { useLocation, useRouteMatch } from "react-router-dom"
export default function To() {
  let param0, param1

  // 使用url传值，获取方式
  let location = useLocation()
  if (location.search) {
    let usp = new URLSearchParams(location.search)
    param0 = usp.get("param0")
    param1 = usp.get("param1")
  }

  // 使用路由路径传递参数，获取方式
  let match = useRouteMatch()
  if (match.params && Object.keys(match.params).length > 0) {
    param0 = match.params.param0
    param1 = match.params.param1
  }

  // hide方式传参，获取方式，但是刷新参数丢失
  let { state } = location
  if (state) {
    // console.log("state=", state)
    param0 = state.param0
    param1 = state.param1
  }

  return (
    <>
      <h1>To Component</h1>
      <div>param0={param0}</div>
      <div>param1={param1}</div>
    </>
  )
}
