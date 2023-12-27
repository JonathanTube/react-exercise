import { HashRouter, Link, Route, Switch } from "react-router-dom"
import styled from "styled-components"
import From from "./from"
import To from "./to"
const NavBox = styled.nav`
  a {
    margin: 20px 10px;
  }
`

export default function Main() {
  return (
    <HashRouter>
      <NavBox>
        <Link to="/from">from component</Link>
        <Link to="/to">to component</Link>
      </NavBox>
      <div>
        <Switch>
          <Route path="/from" component={From} />
          <Route exact path="/to" component={To} />
          {/* 路径传参：？代表可选 */}
          <Route exact path="/to/:param0/:param1?" component={To} />
        </Switch>
      </div>
    </HashRouter>
  )
}
