import React, { useEffect, useState } from 'react'


// useeffect -> do something extra after showing the page 




function UseEffect() {
    useEffect(()=>{
        console.log("component mounted"); 
    },[]); 
  return (
    <>
    <h1>hello</h1>
    </>
  )
}

export default UseEffect


