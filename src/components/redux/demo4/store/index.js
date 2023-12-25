import { createStore, applyMiddleware } from "redux"
import reducer from "./reducer"
import reduxLogger from "redux-logger"
import reduxPromise from "redux-promise"

const store = createStore(reducer, applyMiddleware(reduxPromise, reduxLogger))

export default store
