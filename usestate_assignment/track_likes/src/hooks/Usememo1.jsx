import React, { useMemo, useState } from 'react'

function Usememo1() {
    const [count,setCount] = useState(0); 
    const [Text,setText] = useState(""); 
    const expensiveCalculation = (num) =>{
        console.log("calculating......."); 
        for(let i =0; i<1000000000; i++){

        }
        return num*2; 
    }

    const result = useMemo(()=>{
        return expensiveCalculation(count); 
    },[count]); 
  return (
    <>
    <div>
        <h2>Result: {result}</h2>
        <button onClick={()=> setCount(count+1)}>
            Increment
        </button>

        <input
        type='text'
        value={Text}
        onChange={(e)=>setText(e.target.value)}
        />
    </div>

    </>
  )
}

export default Usememo1