import React from "react"
import Main from "./vote.main"
import Footer from "./vote.footer"
import store from "./store/index"
// 1.安装react-redux
// 2.导入Provider
import { Provider } from "react-redux"
const Vote = () => {
  return (
    // 3.使用Provider
    <Provider store={store}>
      <Main />
      <Footer />
    </Provider>
  )
}

export default Vote
