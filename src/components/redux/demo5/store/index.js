// 导入toolkit
import { configureStore } from "@reduxjs/toolkit"
// 插件
import reduxLogger from "redux-logger"
import { thunk } from "redux-thunk"
// 导入切片
import voteReducer from "./features/vote.slice"

const store = configureStore({
  reducer: {
    // 按模块管理各个切片导出的reducer
    vote: voteReducer
  },
  // 如果不指定任何中间件，默认集成redux-thunk
  // 但是写了其他的，thunk要手动指定
  middlewares: [reduxLogger, thunk]
})

export default store
