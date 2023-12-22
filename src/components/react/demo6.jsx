import React from "react"
// 使用FastClick插件解决移动端click时间的300ms延迟问题
import FastClick from "fastclick"
FastClick.attach(document.body)

export default class Demo extends React.Component {
  // 手机端事件 touchstart –> touchmove –> touchend or touchcancel –> click，
  // 因为在 touch 事件触发之后，浏览器要判断用户是否会做出双击屏幕的操作，
  // 所以会等待 300ms 来判断，再做出是否触发 click 事件的处理，所以就会有 300ms 的延迟；
  handleClick = (event) => {
    console.log("handleClick")
  }
  handleTouchStart = (event) => {
    console.log("1.handleTouchStart")
  }
  handleTouchMove = (event) => {
    console.log("2.handleTouchMove")
  }
  handleTouchEnd = () => {
    console.log("3.handleTouchEnd")
  }
  render() {
    return (
      <div>
        {/*
         * 移动端使用click函数，有300ms延迟问题，所以移动端可以用touch方法模拟，
         * 但是方法有3个方法如果点击并移动的话无法精确判断是否点击，
         * 可以在move方法中添加移动偏移量规则，小于一定区间判定未点击
         */}
        <button
          onTouchStart={this.handleTouchStart}
          onTouchMove={this.handleTouchMove}
          onTouchEnd={this.handleTouchEnd}
          onClick={this.handleClick}
        >
          click me
        </button>
      </div>
    )
  }
}
