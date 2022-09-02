import React,{useState} from 'react'

function ArrayHook() {
    const [items, itemState] = useState([]) 

    const addingNumber = () =>{
        itemState(
            [ ...items, {
                    id : items.length, value: Math.floor(Math.random() * 10) + 1
            }]
        )
    }
  return (
    <div>ArrayHook
        <button onClick={addingNumber}> Add a Number</button>
        <ul>
            {items.map(i => (<li key ={i.id}> {i.value}</li>))}
        </ul>


    </div>
  )
}

export default ArrayHook