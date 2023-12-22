import React, { useState } from "react"
import ChildComponent from "./demo24.child1.functionalcomponent"
import MyContext from "./demo24.context"
export default function ParentComponent() {
  const [val, setVal] = useState(0)

  const changeVal = () => {
    setVal(val + 1)
  }

  return (
    <div>
      {/* 这里父组件的使用方法和class component一样 */}
      <MyContext.Provider value={{ val }}>
        <ChildComponent />
        <div>
          <button onClick={changeVal}>increase val</button>
        </div>
      </MyContext.Provider>
    </div>
  )
}
