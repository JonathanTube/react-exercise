import React from "react"
import Main from "./vote.main"
import Footer from "./vote.footer"
import store from "./store/index"
import { Provider } from "react-redux"
const Vote = () => {
  return (
    <Provider store={store}>
      <Main />
      <Footer />
    </Provider>
  )
}

export default Vote
