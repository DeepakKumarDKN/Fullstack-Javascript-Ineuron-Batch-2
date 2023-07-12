import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {

  const[count, setCount] = useState(0)
  

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <div class="btn">
        <button class= "btn-cls" onClick = {() => (setCount(count+1))}>+</button>
        <button class= "btn-cls" onClick = {() => (setCount(count-1))}>-</button>
      </div>
      </div>
  );
}

export default App;
