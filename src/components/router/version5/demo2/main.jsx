import { HashRouter, Link, Switch, Route, Redirect } from "react-router-dom"
import styled from "styled-components"
import A from "./a"
import B from "./b"
const Layout = styled.div`
  display: flex;
`

const LeftMenu = styled.nav`
  padding: 20px;
  height: 100vh;
  box-sizing: border-box;
  width: 20vw;
  background: yellow;
  display: flex;
  flex-direction: column;

  a {
    margin: 4px 0;
  }
`

const RightContent = styled.div`
  background: pink;
  width: 80vw;
`

const Main = () => {
  return (
    <HashRouter>
      <Layout>
        <LeftMenu>
          <Link to="/a">/a</Link>
          <Link to="/b">/b</Link>
        </LeftMenu>
        <RightContent>
          <Switch>
            {/* 匹配root */}
            <Route path="/" exact component={A} />
            <Route path="/a" component={A} />
            <Route path="/b" component={B} />
            {/* 其余走这个 */}
            <Redirect to="/" />
          </Switch>
        </RightContent>
      </Layout>
    </HashRouter>
  )
}
export default Main
