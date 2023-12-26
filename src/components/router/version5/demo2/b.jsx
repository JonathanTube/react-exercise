import { Switch, Route, Link, Redirect } from "react-router-dom"
import styled from "styled-components"
import B1 from "./b1"
import B2 from "./b2"

const TopMenu = styled.nav`
  background: black;
  padding: 20px 10px;

  a {
    color: #fff;
    margin: 20px 10px;
  }
`

export default function B() {
  return (
    <>
      <TopMenu>
        <Link to="/b/b1">b/b1</Link>
        <Link to="/b/b2">b/b2</Link>
      </TopMenu>
      <Switch>
        <Redirect exact from="/b" to="/b/b1/" />
        <Route path="/b/b1" component={B1} />
        <Route path="/b/b2" component={B2} />
      </Switch>
    </>
  )
}
