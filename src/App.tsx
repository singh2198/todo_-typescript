import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "../src/Component/Button"
import Todo from './Todoapp/Todo';

function App() {
  const [state,setstae]=useState<number>(0)


  
  return (
    <div className="App">
      <Todo/>
      {/* <h1>{state}</h1> */}
     {/* <Button text='Add' handleclick={()=> {setstae(state => state+1)}}/> */}
     {/* <Button text='sub' handleclick={()=> {setstae(state => state-1)}}/> */}
    </div>
  );
}

export default App;
