// 基于 extends 实现继承
// 1，首先基于call继承 React.Component,call(this) //this->Parent类的实例pfunction Component(props, context, updater) {
// this.props = props;
// this.context = context;
// this.refs = emptyObject;
// this.updater = updater  ReactNoopUpdateQueue;
// 给创建的实例p设置四个私有属性: props/context/refs/updater
// 2，再基于原型继承 Parent.prototype. proto  === React,Component,prototype实例 -> Parent.prototype -> React.Component.prototype -> Object.prototype实例除了具备Parent,prototype提供的方法之外，还具备了React,(omponent,prototype原型上提供的法: isReactomponent、setState、 forceupdate
// 3，只要自己设置了constructor，则内部第一句话一定要执行 super()
class Parent extends React.Component {
  constructor(props) {
    // this->p props->获取的属性
    /* super(); //等价于 React.Component.call(this)
    // this.props=undefined this.context=undefined this.refs=l} .... */
    super(props)
    // this.props=props this.context=undefined ...
  }
  x = 100
  getX() {}
}
let p = new Parent()
console.log(p)
