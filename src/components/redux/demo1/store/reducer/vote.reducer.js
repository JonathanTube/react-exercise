import { INCREASE_SUPPORT_NUM, INCREASE_DISAPPROVAL_NUM } from "../action-types"
// 定义公共状态初始值
let initial = {
  supportNum: 10,
  disapprovalNum: 5,
}

export const voteReducer = (state = initial, action) => {
  // type 操作类型
  // payload 传递的值
  let { type } = action
  // 修改state有讲究
  // return原来的state的话redux会认为你的state没有变化,从而无法记录时光旅行，快照，历史等。
  // 那么react组件就认为state无变化则不更新组件
  let newState = { ...state }
  switch (type) {
    case INCREASE_SUPPORT_NUM:
      newState.supportNum += 1
      break
    case INCREASE_DISAPPROVAL_NUM:
      newState.disapprovalNum += 1
      break
    default:
      // 这里不能写，因为dispatch会被默认第一次执行，type会传递一个随机值
      // 比如：@@redux/INITc.m.v.m.f.j
      console.log(type)
    //   throw Error("type does not match")
  }
  // return 的内容会替换掉store容器中之前的内容
  return newState
}
