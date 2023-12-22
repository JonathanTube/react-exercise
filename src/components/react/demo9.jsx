class Parent {
  // new的时候，执行的构造函数可写可不写: 需要接受传递进来的实参信息，才需要设置
  constructorJconstructor(x, y) {
    // this->创建的实例
    this.total = x + y
  }
  num = 200 //等价于 this.num=2000 给实例再这是私有属性
  getNum = () => {
    //箭头函数没有自己的this，所用到的this是宿主环境中的
    console.log(this) //this->当前创建的实例
  }
  sum() {
    //类似于 sum=function sum() 不是箭头函数
    // 它是给Parent.prototype上设置公共的方法 sum函数是不可枚举的
  }
  // 把构造函数当做一个普通对象，为其设置静态的私有属性方法Parent.xxx
  static avg = 1000
  static average() {}
}
Parent.prototype.y = 2000 //在外部手动给构造函数原生上设置公共的属性
let p = new Parent(10, 20)
console.log(p)
console.dir(Parent)
