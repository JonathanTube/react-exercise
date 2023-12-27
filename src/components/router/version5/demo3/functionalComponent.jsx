import { useLocation, useHistory, useRouteMatch } from "react-router-dom"
export default function FunctionalComponent(props) {
  // 1. 通过<Route component={Sub1} .../>配置的路由，直接通过props拿到
  let { history, location, match } = props
  console.log(history)
  console.log(location)
  console.log(match)

  // 2. 函数组件中也可以使用hooks
  let _history = useHistory()
  let _location = useLocation()
  let _match = useRouteMatch()
  console.log(_history)
  console.log(_location)
  console.log(_match)

  return <>FunctionalComponent</>
}
