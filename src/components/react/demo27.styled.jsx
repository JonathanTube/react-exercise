import styled from "styled-components"

const MainColor = "red"

export const Nav = styled.nav`
  background-color: lightblue;
  width: 100%;
  height: 100vh;

  .box1 {
    background: ${MainColor};
    height: 50%;
    // 这里可以拿到传递的属性
    font-size: ${(props) => props.fontSize}px;
  }

  .box2 {
    background: green;
    height: 50%;
    &:hover {
      background: #b90b28;
    }
  }
`

export const Title = styled.h1.attrs((props) => {
  return {
    // 这里指定默认值参数
    fontSize: props.fontSize || 30,
  }
})`
  font-weight: bold;
  // 使用默认值参数
  font-size: ${(props) => props.fontSize}px;
`
