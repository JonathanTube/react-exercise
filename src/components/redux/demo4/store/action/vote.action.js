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
  async support() {
    await wait()
    return {
      type: Types.SUPPORT_NUM
    }
  },
  disapproval() {
    return {
      type: Types.DISAPPROVAL_NUM
    }
  }
}

export default VoteAction
