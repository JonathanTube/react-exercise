// BrowserRouter = history router
// HashRouter = hash router
import { HashRouter, Link, Route, Switch, Redirect } from "react-router-dom"
import styled from "styled-components"
import sub1 from "./sub1"
import sub2 from "./sub2"
import notFound from "./notFound"

// styled.x => x必须是html中存在的domElement
const NavBox = styled.nav`
  a {
    margin: 20px 10px;
  }
`

export default function Main() {
  return (
    // 所有内容都要放在HashRouter或BrowserRouter中
    <HashRouter>
      <NavBox>
        {/* hash 路由 */}
        {/* <a href="#/sub1">sub1</a>
        <a href="#/sub2">sub2</a> */}
        {/* 使用Link自动切换路由模式：hash自动前面加# */}
        <Link to="/">sub1</Link>
        <Link to="/sub2">sub2</Link>
        <Link to="/sub3">sub3</Link>
      </NavBox>
      <div>
        {/* 使用switch阻止部分匹配，只要有一项匹配就终止 */}
        {/* 但是/sub2也与/匹配，于是只渲染/了，所以要再path="/"，加上exact */}
        <Switch>
          {/* 使用Route映射path和组件 */}
          <Route path="/" exact component={sub1} />
          <Route path="/sub2" component={sub2} />

          <Route
            path="/sub3"
            render={() => {
              // 可以添加一些条件判断
              //   if (xxx) {
              //     return <Redirect to="welcome" />
              //   }
              return <div>这是单独渲染的</div>
            }}
          />

          {/* 找不到test路径，跳转到root */}
          <Redirect from="/test" to="/" exact />
          {/* 找不到路径，渲染404组件 */}
          <Route path="/*" component={notFound} />
        </Switch>
      </div>
    </HashRouter>
  )
}
