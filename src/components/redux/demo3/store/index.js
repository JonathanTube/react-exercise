import { createStore, applyMiddleware } from "redux"
import reducer from "./reducer"
import reduxLogger from "redux-logger"
// 导入redux-thunk 而不是 reduxThunk
import { thunk } from "redux-thunk"

const store = createStore(reducer, applyMiddleware(thunk, reduxLogger))

export default store
