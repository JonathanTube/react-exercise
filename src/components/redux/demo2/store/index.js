import { createStore, applyMiddleware } from "redux"
import reducer from "./reducer"
import reduxLogger from "redux-logger"
const store = createStore(reducer, applyMiddleware(reduxLogger))

export default store
