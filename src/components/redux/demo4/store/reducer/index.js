import { combineReducers } from "redux"
import VoteReducer from "./vote.reducer"
const reducer = combineReducers({
  vote: VoteReducer,
})
export default reducer
