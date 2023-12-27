import React from "react"
import { useLocation, useHistory, useRouteMatch } from "react-router-dom"
// Router Ver5版本中，直接使用withRouter
// import { withRouter } from "react-router-dom"
class ClassComponent extends React.Component {
  render() {
    // 如果类组件放在Route中，是可以直接拿到路由相关对象的
    let { history, location, match } = this.props
    console.log(history)
    console.log(location)
    console.log(match)

    return <>Class Component</>
  }
}

// 如果类组件不在Route修饰中，那需要使用高阶组件+hooks，拿到路由相关对象
const HOC = (Component) => {
  return function HOC(props) {
    let history = useHistory()
    let location = useLocation()
    let match = useRouteMatch()
    return (
      <Component
        {...props}
        history={history}
        location={location}
        match={match}
      />
    )
  }
}
export default HOC(ClassComponent)
// Router Ver5版本中，直接使用withRouter，等同于高阶组件
// export default withRouter(ClassComponent)
