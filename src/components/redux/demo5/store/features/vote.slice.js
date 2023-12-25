// 切片包含reducer和action
import { createSlice } from "@reduxjs/toolkit"

const voteSlice = createSlice({
  // 名称
  name: "vote",
  // 初始状态，自动赋值
  initialState: {
    supportNum: 1,
    disapprovalNum: 2
  },
  // 业务逻辑，修改公共状态
  reducers: {
    // state: redux中的公共状态信息[基于immer库管理，无需自己克隆]
    // action: 派发的行为对象，无需考虑action.type，取数据是：action.payload
    supportAction(state, action) {
      let { payload } = action
      console.log("payload=", payload)

      state.supportNum += 1
    },
    disapprovalAction(state, action) {
      let { payload } = action
      console.log("payload=", payload)
      state.disapprovalNum += 1
    }
  }
})
export const { supportAction, disapprovalAction } = voteSlice.actions
export default voteSlice.reducer
