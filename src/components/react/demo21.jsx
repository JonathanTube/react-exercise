import React from "react"
import PropTypes from "prop-types"

class VoteMain extends React.Component {
  // 设置默认值
  static defaultProps = {
    supportNum: 0,
    disapprovalNum: 0,
  }
  // 校验
  static propTypes = {
    supportNum: PropTypes.number.isRequired,
    disapprovalNum: PropTypes.number.isRequired,
  }

  render() {
    let { supportNum, disapprovalNum } = this.props
    let total = supportNum + disapprovalNum
    let ratio = total === 0 ? 0 : ((supportNum / total) * 100).toFixed(2)
    return (
      <div>
        <div>支持数：{supportNum}</div>
        <div>反对数：{disapprovalNum}</div>
        <div>支持比例：{ratio}%</div>
      </div>
    )
  }
}

/**
 * 这里需要使用PureComponent
 * 因为方法传递进来，子组件没有必要重新渲染
 * 因为父组件使用的类组件，那方法也是this中的，永远是同一个方法
 */
class VoteFooter extends React.PureComponent {
  // 默认值
  static defaultProps = {
    support: () => {},
    disapprove: () => {},
  }
  // 校验
  static propTypes = {
    support: PropTypes.func.isRequired,
    disapprove: PropTypes.func.isRequired,
  }

  componentDidUpdate() {
    // 使用了PureComponent这句话不会打印
    console.log("footer component updated")
  }

  render() {
    let { support, disapprove } = this.props
    return (
      <div>
        {/* bind也可以，而且还可以传递一些额外值 */}
        <button onClick={support.bind(this)}>支持</button>
        &nbsp;
        {/* 子组件调用父组件的方法 */}
        <button onClick={disapprove}>反对</button>
      </div>
    )
  }
}

class Vote extends React.Component {
  state = {
    supportNum: 1,
    disapprovalNum: 2,
  }

  support = () => {
    this.setState({
      supportNum: this.state.supportNum + 1,
    })
  }

  disapprove = () => {
    this.setState({
      disapprovalNum: this.state.disapprovalNum + 1,
    })
  }

  render() {
    let { supportNum, disapprovalNum } = this.state
    return (
      <div>
        <div>总人数：{supportNum + disapprovalNum}</div>
        {/* 父组件向子组件传递参数 */}
        <VoteMain supportNum={supportNum} disapprovalNum={disapprovalNum} />
        {/* 父组件向子组件传递方法 */}
        <VoteFooter support={this.support} disapprove={this.disapprove} />
      </div>
    )
  }
}

export default Vote
