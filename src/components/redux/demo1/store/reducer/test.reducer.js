import { CASE_0, CASE_1 } from "../action-types"
const initialValue = {
  x: 0,
  y: 0,
}
export const testReducer = (state = initialValue, action) => {
  let newState = { ...state }
  switch (action.type) {
    case CASE_0:
      newState.x += 1
    case CASE_1:
      newState.y += 1
    default:
  }
  return newState
}
