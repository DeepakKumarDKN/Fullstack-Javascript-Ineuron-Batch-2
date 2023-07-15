import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { createContext, useState } from 'react';
import HeroSection from './Components/HeroSection';
import UserCard from './Components/UserCard';

export const myContext = createContext();

function App() {
  const [name, setName] = useState("")
  const [color,setColor] = useState("")

  // const myName = (event) =>{
  //   setName(event.target.value)
  // }

  // const myColor = (event) =>{
  //   setColor(event.target.value)
  // }

  return (
   <myContext.Provider value = {{name,color}}>
   <Navbar />
   <form>
    <input type= {"text"}
      placeholder= "Enter Your Username"
      value = {name}
      onChange = {(e)=> setName(e.target.value)}
      // onChange = {myName}
    /><br/>

    <input type= {"text"} 
      placeholder='Enter Your Color'
      value = {color}
      onChange = {(e) => setColor(e.target.value)}
      // onChange = {myColor}
    />
   </form>
   <br />

   <HeroSection />
   <UserCard />
   </myContext.Provider>
      
    
  );
}

export default App;


// Notes

// const [name, setName] = useState("")
// const [color,setColor] = useState("")

// onChange = {myName}
// so here we can create a function called myName 



// const myName = (event) =>{
//   setName(event.target.value)
// }

// so when we are calling this function myName setName is getting the value 
// initialized to the name property

// else we can directly write like this 

// onChange = {(e) => setColor(e.target.value)}
