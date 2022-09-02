import logo from './logo.svg';
import './App.css';
import React from 'react';
import FirstHook from './components/FirstHook';
import FormsHook from './components/FormsHook';
import ArrayHook from './components/ArrayHook';
import DemoUE from './components/DemoUE';
import DemoUEHooks from './components/DemoUEHooks';
import DemoLastNode from './components/DemoLastNode';

export const UserContext = React.createContext()

function App() {
  return (
    <div className="App">
     <h1> Hooks</h1>
      <UserContext.Provider value={"Ansari"}>
        <DemoLastNode />
      </UserContext.Provider>



     {/* <DemoUE/> 
     <br></br> <br></br><br></br>
     <DemoUEHooks/> */}
     {/* <FirstHook/> */}
     {/* <FormsHook/>  
     <ArrayHook/> */}
        
    </div>
  );
}

export default App;
