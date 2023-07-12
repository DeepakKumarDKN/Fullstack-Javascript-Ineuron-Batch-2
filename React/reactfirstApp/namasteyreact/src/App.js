import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function SuperHeros(){
  let [hero, setHero] = useState(['SpiderMan', 'SuperMan', 'Hulk'])
  const [name, setName] = useState(()=> "antman")

  let addName = () => {
    setHero([...hero, name])
    setName("")
  }

  return (
    <div>
        <ul>
          {
          hero.map((h)=>(
          <li key={h}>{h}</li>
          ))}
        </ul>
        <input
          type= "text"
          value = {name}
          onChange = {(e) => setName(e.target.value)}
        />

        <button onClick={addName}>
          Add Value
        </button>
    </div>
  )
}


function Counter(){
  let [count, setCount] = useState(10)

  function oneUp(){
    setCount(count + 1)
  }
  return( 
  <div>
    <button
      onClick = {oneUp}
      > Count : {count}
    </button>
   <SuperHeros />
  </div>
  )
};

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <Counter />
    </>
    
  );
}

export default App;


