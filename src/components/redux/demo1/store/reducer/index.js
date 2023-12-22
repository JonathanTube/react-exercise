import { combineReducers } from "redux"
import { voteReducer } from "./vote.reducer"
import { testReducer } from "./test.reducer"
const reducer = combineReducers({
  vote: voteReducer,
  test: testReducer,
})

export default reducer
