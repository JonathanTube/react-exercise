import * as Types from "../action-types"
const VoteAction = {
  support() {
    return {
      type: Types.SUPPORT_NUM,
    }
  },
  disapproval() {
    return {
      type: Types.DISAPPROVAL_NUM,
    }
  },
}

export default VoteAction
