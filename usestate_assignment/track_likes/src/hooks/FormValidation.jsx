// form validation using usereducer 

import React, { useReducer } from 'react'


function reducer(state,action){
    switch(action.type){
        case "update_field": 
        return{
            ...state, 
            [action.field]: action.value
        }; 
        case "validate_form":
            const errors = {}; 
            if(!state.name.trim()){
                errrors.name = "name is required"; 
            }
            if(!state.email.includes("@")){
                errors.email = "email must include @"
            }
            if(state.password.length<8){
                errors.password = "password must be at least 8 characters"; 
            }

            return{
                ...state,
                errors
            }; 
            default: 
            return state;
    }

}

function FormValidation() {
    const initialState = {
        name: "",
        email: "",
        password: "",
        errors: {}
    }
    const[state,dispatch] = useReducer(reducer,initialState); 
    const handleChange = (e)=>{
        dispatch({
            type:"update_field", 
            field:e.target.name,
            value:e.target.value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault(); 
        dispatch({type:"Validate_form"}); 
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" 
        name = "name"
        placeholder = "enter name"
        value = {state.name}
        onChange={handleChange}
        />
        {state.errors.name && (
            <p style = {{color:"red"}}>{state.errors.name}</p>
        )}

         <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={state.email}
        onChange={handleChange}
      />
      {state.errors.email && (
        <p style={{ color: "red" }}>{state.errors.email}</p>
      )}


      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        value={state.password}
        onChange={handleChange}
      />
      {state.errors.password && (
        <p style={{ color: "red" }}>{state.errors.password}</p>
      )}


    <button type="submit">Submit</button>

    </form>
    </>
  )
}

export default FormValidation