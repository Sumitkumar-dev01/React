import React, { useState,useMemo } from 'react'

function Usememo2() {
    const[search,setSearch] = useState(""); 
    const items = ["apple","banana","mango","orange"]; 
    const filteredItems = useMemo(()=>{
        console.log("filtering..........")
        return items.filter((item)=>
        item.toLowerCase().includes(search.toLowerCase()))
    },[search])
  return (
    <>
    <div>
        <input
        type='text'
        placeholder='search....'
        onChange={(e)=>setSearch(e.target.value)}
        />

        {filteredItems.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
    </>
  )
}

export default Usememo2