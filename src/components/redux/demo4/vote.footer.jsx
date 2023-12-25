import React from "react"
import Action from "./store/action"
import { connect } from "react-redux"

class Footer extends React.Component {
  render() {
    let { supportNum, disapprovalNum, support, disapproval } = this.props
    return (
      <div>
        <div>总计人数：{supportNum + disapprovalNum}</div>
        <button onClick={support}>支持</button>
        &nbsp;
        <button onClick={disapproval}>反对</button>
      </div>
    )
  }
}
/**
 * connect方法传递两个参数，处理后分别将变量和方法注入到组件的props中
 *
 * connect(mapStateToProps, mapDispatchToProps) => {
 *
 * }
 */
export default connect(
  (state) => {
    return {
      ...state.vote
    }
  }, //一个是store中保存的公共变量
  Action.vote
  /**
   * 另一个是mapDispatchToProps,自动将action中的方法转换为dispatch调用
   * {
   *    support() {
   *      dispatch(action.vote.support())
   *    },
   *    disapproval() {
   *      dispatch(action.vote.disapproval())
   *    }
   * }
   */
)(Footer)
