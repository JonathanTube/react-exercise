import { CASE_0, CASE_1 } from "../action-types"
const TestAction = {
  case0() {
    return {
      CASE_0: CASE_0,
    }
  },
  case1() {
    return {
      CASE_1: CASE_1,
    }
  },
}

export default TestAction
