import React, { useCallback, useMemo, useState, memo } from "react"
import PropTypes from "prop-types"

const VoteMain = ({ supportNum, disapprovalNum, title }) => {
  // 这里做优化，当且仅当supportNum,和disapprovalNum变化才重新计算
  const ratio = useMemo(() => {
    let total = supportNum + disapprovalNum
    let ratio = total === 0 ? 0 : ((supportNum / total) * 100).toFixed(2)
    return ratio
  }, [supportNum, disapprovalNum])
  return (
    <div>
      <div>支持数：{supportNum}</div>
      <div>反对数：{disapprovalNum}</div>
      <div>支持比例：{ratio}%</div>
      <div>{title}</div>
    </div>
  )
}
// 设置默认值
VoteMain.defaultProps = {
  supportNum: 0,
  disapprovalNum: 0,
}
// 校验
VoteMain.propTypes = {
  supportNum: PropTypes.number.isRequired,
  disapprovalNum: PropTypes.number.isRequired,
}

const VoteFooter = memo(({ support, disapprove }) => {
  console.log("VoteFooter render")
  return (
    <div>
      <button onClick={support}>支持</button>
      &nbsp;
      {/* 子组件调用父组件的方法 */}
      <button onClick={disapprove}>反对</button>
    </div>
  )
})

// 默认值
VoteFooter.defaultProps = {
  support: () => {},
  disapprove: () => {},
}
// 校验
VoteFooter.propTypes = {
  support: PropTypes.func.isRequired,
  disapprove: PropTypes.func.isRequired,
}

const Vote = () => {
  const [supportNum, setSupportNum] = useState(1)
  const [disapprovalNum, setDisapprovalNum] = useState(1)

  // 使用useCallback,让函数指向地址不变
  // 这里如果设置deps=[]的话，函数永远都是第一次的创建的函数
  // 这个函数依赖的上下文的数值永远是初始化的supportNum
  // 无论如何点击都不会有效果
  const support = useCallback(() => {
    setSupportNum(supportNum + 1)
  }, [supportNum])

  //使用useCallback,让函数指向地址不变
  const disapprove = useCallback(() => {
    setDisapprovalNum(disapprovalNum + 1)
  }, [disapprovalNum])

  return (
    <div>
      <div>总人数：{supportNum + disapprovalNum}</div>
      {/* 父组件向子组件传递参数 */}
      <VoteMain
        title={"第一届投票"}
        supportNum={supportNum}
        disapprovalNum={disapprovalNum}
      />
      {/* 父组件向子组件传递方法 */}
      <VoteFooter support={support} disapprove={disapprove} />
    </div>
  )
}

export default Vote
