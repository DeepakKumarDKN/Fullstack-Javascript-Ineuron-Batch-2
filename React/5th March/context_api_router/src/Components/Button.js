import React, { useContext } from 'react'
import { myContext } from '../App'


function Button() {
  const data = useContext(myContext)
  return (
    <button style={{backgroundColor : data.color}}>Click Here</button>
  )
}

export default Button