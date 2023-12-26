import { Link } from "react-router-dom"
import styled from "styled-components"
import { Switch, Route, Redirect } from "react-router-dom"
// 导入lazy，Suspense(悬念)
import { lazy, Suspense } from "react"

const A1 = lazy(() => {
  // 这里模拟加载需要消耗时间
  return new Promise((resolve) => {
    setTimeout(() => {
      let result = import(/* webpackChunkName:"a-bundle" */ "./a1")
      resolve(result)
    }, 5000)
  })
})
// webpackChunkName:"a-bludle" 告诉webpack打包合并a1和a2
const A2 = lazy(() => import(/* webpackChunkName:"a-bundle" */ "./a2"))

const LazyA1 = () => (
  // 必须用Suspense包裹，不然报错
  // fallback是未加载完成之前渲染的组件
  <Suspense fallback={<div>加载中</div>}>
    <A1 />
  </Suspense>
)

const LazyA2 = () => {
  return (
    <Suspense fallback={<div>加载中</div>}>
      <A2 />
    </Suspense>
  )
}

const TopMenu = styled.nav`
  background: purple;
  padding: 20px 10px;

  a {
    color: #fff;
    margin: 20px 10px;
  }
`
export default function A() {
  return (
    <>
      <TopMenu>
        <Link to="/a/a1">a/a1</Link>
        <Link to="/a/a2">a/a2</Link>
      </TopMenu>
      <Switch>
        {/* 首页跳转到... */}
        <Redirect exact from="/" to="/a/a1/" />
        {/* 一级路由root跳转到... */}
        <Redirect exact from="/a" to="/a/a1/" />
        <Route path="/a/a1" component={LazyA1} />
        <Route path="/a/a2" component={LazyA2} />
      </Switch>
    </>
  )
}
