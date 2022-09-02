import React, {useState, useEffect} from 'react'

function DemoUEHooks() {

    const [count, setCount] = useState(0)

    useEffect(()=>{
        document.title = `counter is ${count}`
    }

    )

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Counter is {count}</button>
    </div>
  )
}

export default DemoUEHooks
