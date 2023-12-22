import React from "react"

import { Nav, Title } from "./demo27.styled"
const Demo = () => {
  return (
    <div>
      <Nav fontSize={80}>
        <div className="box1">
          <span>box1</span>
          <Title fontSize="50">Here is a title.</Title>
        </div>
        <div className="box2">box2</div>
      </Nav>
    </div>
  )
}

export default Demo
