import React from "react"

import styled from "./demo25.module.css"

export default function Demo() {
  console.log(styled)
  return (
    <div className={styled.box}>
      <div className={styled.main}>1</div>
      <div className={styled.subChild}>2</div>
    </div>
  )
}
