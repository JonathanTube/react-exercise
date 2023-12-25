import * as Types from "../action-types"
const initialState = {
  supportNum: 1,
  disapprovalNum: 2,
}
const VoteReducer = (state = initialState, action) => {
  let { type } = action
  let nextState = { ...state }
  switch (type) {
    case Types.SUPPORT_NUM:
      nextState.supportNum += 1
      break
    case Types.DISAPPROVAL_NUM:
      nextState.disapprovalNum += 1
      break
    default:
  }
  return nextState
}
export default VoteReducer
