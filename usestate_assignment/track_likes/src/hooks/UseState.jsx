import React, { useState } from 'react'

function UseState() {
    const [state, setState] = useState(); 
    const [name, setName]  = useState("sumit"); 
    const [age, setAge] = useState(20); 
    const [students, SetStudents] = useState([]); 
  return (
    <>
    {name}
    {age}
    <button onClick={()=> setAge(age+1)}>add one more year</button>
    <button onClick={()=> setName("rahul")}>change your name</button>
    
    </>
  )
}

export default UseState