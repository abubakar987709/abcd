import React, { use, useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const UseRef = () => {
const[inputvalue,setinputvalue]=useState("")
const count=useRef(0)
useEffect(()=>{
    count.current=count.current+1;
})
  return (
    <>
    <input type="text" 
    value={inputvalue}
    onChange={(e)=>setinputvalue(e.target.value)}
    
    />
    <h1>Comments:{count.current}</h1>
    </>
  )
}

export default UseRef