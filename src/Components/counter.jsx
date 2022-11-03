import React from 'react'
import { useState } from 'react'

function Counter() {
    let[count,setCount] = useState(0);
   

  return (
    <div>
        <p>You clicked {count} time</p>
        <button onClick={()=>setCount(count+1)}>Clicked</button>
    </div>
  )
}

export default Counter;