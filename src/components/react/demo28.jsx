import React, { useReducer } from "react"
export default function Demo() {
  // 使用reducer可以指定一个对象
  const initialState = {
    name: "Jonathan",
    age: "40",
    gender: "male",
    address: "China"
  }
  // 不使用useState，而使用reducer统一管理状态
  const reducer = (state, action) => {
    const { type } = action
    state = { ...state }
    switch (type) {
      case "SET_AGE":
        state.age = action.payload
        break
      case "SET_GENDER":
        state.gender = action.payload
        break
      default:
    }
    return state
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <div>username:{state.name}</div>
      <div>age:{state.age}</div>
      <div>gender:{state.gender}</div>
      <div>address:{state.address}</div>

      <div>
        <button
          onClick={() => {
            dispatch({
              type: "SET_AGE",
              payload: 39
            })
          }}
        >
          change age
        </button>

        <button
          onClick={() => {
            dispatch({
              type: "SET_GENDER",
              payload: "FEMALE"
            })
          }}
        >
          change gender
        </button>
      </div>
    </>
  )
}
