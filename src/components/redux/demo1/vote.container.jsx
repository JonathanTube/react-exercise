import React from "react"
import Main from "./vote.main"
import Footer from "./vote.footer"
import storeContext from "./store/storeContext"
import store from "./store/index"
const Demo = () => {
  return (
    <storeContext.Provider value={{ store }}>
      <Main />
      <Footer />
    </storeContext.Provider>
  )
}

export default Demo
