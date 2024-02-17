"use client";
// Reducer Import
import React, { useReducer } from "react";

// Used Reducer Function
const reducer = (state: any, action: any) => {
  if (action.type === "CHANGE") {
    console.log(action);
    return {
      ...state,
      name: action.payload.name,
      email: action.payload.email,
    };
  }
};

// Make Component
const Component = () => {
  // reducer initialState
  const initialState: { name: string; email: string } = {
    name: "saim",
    email: "saim@gmail.com",
  };

  // init reducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // reducer dispatch function
  const change = () => {
    return dispatch({
      type:"CHANGE",
      payload: {
        name: "Vscode",
        email: "vscode@gmail.com"
      }
    })
  }
  return (
    <>
    {/* Show value */}
    <div>{state.name}</div>
    {/* Action Event */}
    <button onClick={()=>change()}>Update Value</button>
    </>
  );
};

export default Component;
