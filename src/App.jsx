import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [counter, SetCounter] = useState(0);
useEffect(()=> {
  //SetCounter(100); // The code inside of this useEffect() method only happens at the initial load of the component.
  
},[counter]); //simply providing the variable name here, whenever the variable value changed, we cna call code inside of useEffect() method

  return (
    <div className="App">
      
      <h1>Vite + React</h1>
      <a href='https://reactjs.org/docs/hooks-reference.html' name="React Ref">React Ref</a> <br></br>
    Substract<button onClick={() => SetCounter((prevCount) => prevCount-1)}>-</button>
    <h1>{counter}</h1>
    Addition<button onClick={() => SetCounter((prevCount) => prevCount+1)}>+</button>
    </div>
  )
}

export default App
