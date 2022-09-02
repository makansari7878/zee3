
import {UserContext} from '../App'
import React,{ useState, createContext, useContext } from 'react';



function DemoLastNode() {
    const user = useContext(UserContext);
  return (
    <div>DemoLastNode

<h2>{`Hello ${user} again!`}</h2>
         


    </div>  
  )
}

export default DemoLastNode