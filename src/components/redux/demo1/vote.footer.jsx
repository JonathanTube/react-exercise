import React from "react"
import storeContext from "./store/storeContext"
import action from "./store/action/index"

class Footer extends React.Component {
  static contextType = storeContext

  increaseSupportNum = () => {
    let { store } = this.context
    store.dispatch(action.vote.increaseSupportNum())
  }
  increaseDisapprovalNum = () => {
    let { store } = this.context
    store.dispatch(action.vote.increaseDisapprovalNum())
  }

  /**
   * 函数组件中，组件首次加载完成后
   * 订阅redux的store变化，强制更新组件
   */
  componentDidMount() {
    let { store } = this.context
    store.subscribe(() => {
      this.forceUpdate()
    })
  }

  render() {
    const { store } = this.context
    let { supportNum, disapprovalNum } = store.getState().vote
    return (
      <div>
        <div>总计人数：{supportNum + disapprovalNum}</div>
        <button onClick={this.increaseSupportNum}>支持</button>
        &nbsp;
        <button onClick={this.increaseDisapprovalNum}>反对</button>
      </div>
    )
  }
}

export default Footer
