import React, {useState} from 'react'
import {Routes, Route, Link} from 'react-router-dom'

function FirstHook() {

    const intialCount = 0
    const [count, setCount] = useState(intialCount)

    const incrementByFive = () => {
       // alert("test")

    //    for (let i = 0; i<5 ; i++){
    //     setCount(count+1)
    //    }

    for (let i = 0; i<5 ; i++){
        setCount(pc => pc + 1)
       }
    }
  return (
    <div>
            <Link to="/formshook"><h2 > My Count is {count}</h2></Link>
        <button onClick={() => setCount(count + 1)}>Counter INC {count}</button>
        <button onClick={() => setCount(count - 1)}>Counter DEC {count}</button>
        <button onClick={() => setCount(intialCount)}>Counter RESET {count}</button>

        <button onClick={incrementByFive}>INC by 5</button>
      
    </div>
  )
}

export default FirstHook
