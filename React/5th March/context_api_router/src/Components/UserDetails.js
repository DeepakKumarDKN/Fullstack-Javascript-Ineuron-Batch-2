import React, { useContext } from 'react'
import { myContext } from '../App'

function UserDetails() {
  const data = useContext(myContext)
  return (
    <>
    Name is: {data.name}<br/>
    </>
  )
}

export default UserDetails