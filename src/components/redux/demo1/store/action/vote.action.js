import { INCREASE_SUPPORT_NUM, INCREASE_DISAPPROVAL_NUM } from "../action-types"
const VoteAction = {
  increaseSupportNum() {
    return {
      type: INCREASE_SUPPORT_NUM,
    }
  },
  increaseDisapprovalNum() {
    return {
      type: INCREASE_DISAPPROVAL_NUM,
    }
  },
}
export default VoteAction
