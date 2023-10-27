import { createContext, useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import './App.css';

export const myContext = createContext()

function App() {

  const[name, setName] = useState("")
  const [surname, setSurName] = useState("")

  const myName = (event) => {
    setName(event.target.value)
  }

  const mySurName = (event) => {
    setSurName(event.target.value)
  }

  return (
    <div className="App">
      <myContext.Provider value = {{name,surname}}>
      <Hero/>
      <Navbar/>

        <form>
          <input type= {'text'} 
          placeholder="Enter Your Name"
          value = {name}
          onChange = {myName} 
          />

          <input type={"text"} placeholder="Enter You Surname"
          value = {surname} onChange= {mySurName}
          />
        </form> 
      </myContext.Provider>
    </div>
  );
}

export default App;
