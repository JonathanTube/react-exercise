import { HashRouter, Link, Route, Switch } from "react-router-dom"
import FunctionalComponent from "./functionalComponent"
import ClassComponent from "./classComponent"

export default function Main() {
  return (
    // 不管是函数组件还是类组件，必须要在HashRouter或BrowserRouter中才能拿到路由相关对象
    <HashRouter>
      <div>
        <Link to="/fc1_0">FunctionalComponent0_1</Link>
        &nbsp;
        <Link to="/fc1_1">FunctionalComponent1_1</Link>
        &nbsp;
        <Link to="/cc1_1">classComponent1_0</Link>
      </div>
      <div>
        <Switch>
          {/* 不管是函数组件还是类组件，在Route中直接拿到路由相关对象 */}
          <Route path="/fc1_0" component={FunctionalComponent} />
          {/* 通过render方式渲染的要将props传递给组件 */}
          <Route
            path="/fc1_1"
            render={(props) => {
              return <FunctionalComponent {...props} />
            }}
          />
          <Route path="/cc1_1" component={ClassComponent} />
        </Switch>

        {/* 如果函数组件不是Route渲染的;使用hook可以拿到路由相关对象，props是拿不到的 */}
        <FunctionalComponent />
        {/* 函数组件不在Route中，需要使用HOC */}
        <ClassComponent />
      </div>
    </HashRouter>
  )
}
