import * as Types from "../action-types"

/**
 * 模拟异步执行返回promise
 *
 * @param {*} mileseconds
 * @returns
 */
const wait = (mileseconds = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, mileseconds)
  })
}

const VoteAction = {
  support() {
    // 返回一个异步函数
    return async (dispatch) => {
      await wait()
      // 这里要用dispatch分发action
      dispatch({
        type: Types.SUPPORT_NUM
      })
    }
  },
  disapproval() {
    return {
      type: Types.DISAPPROVAL_NUM
    }
  }
}

export default VoteAction
