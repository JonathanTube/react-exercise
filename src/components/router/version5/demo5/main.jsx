import { HashRouter, NavLink, Route, Switch } from "react-router-dom"
import styled from "styled-components"
import From from "./from"
import To from "./to"
const NavBox = styled.nav`
  a {
    margin: 20px 10px;
  }
  a.active {
    color: red;
  }
  a.myActive {
    color: green;
  }
`

export default function Main() {
  return (
    <HashRouter>
      <NavBox>
        {/* 使用NavLink，当前路由被激活，会添加class="active"，可以自定义样式 */}
        <NavLink to="/from">from component</NavLink>
        {/* 也可以自己指定active样式名称 */}
        <NavLink to="/to" activeClassName="myActive">
          to component
        </NavLink>
      </NavBox>
      <div>
        <Switch>
          <Route path="/from" component={From} />
          <Route exact path="/to" component={To} />
        </Switch>
      </div>
    </HashRouter>
  )
}
