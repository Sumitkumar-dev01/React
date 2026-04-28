import React, { useReducer } from 'react'

// syntax of usereducer function 
// const[state,dispatch] = (reducer,initialstate) 
// state => current data 
// dispatch = function of sending action 
// reducer = function of writing logic 

function reducer(state,action){
  switch(action.type){
    case "increment": 
    return{count:state.count+1}; 
    case "decrement": 
    return {count:state.count-1}; 
    default: 
    return state;
  }
}


function UseReducer() {
  const initialState = {count:0}
  const[state,dispatch] = useReducer(reducer,initialState); 

  return (
    <>
    <div>
      <h2>count:{state.count}</h2>
      <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
      <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
    </div>
    </>
  )
}

export default UseReducer; 