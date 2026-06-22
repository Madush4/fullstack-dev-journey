import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const {userid} = useParams()
  return (
    <div className='bg-amber-400 p-4 text-black text-4xl text-center font-bold'>User {userid}</div>
  )
}

export default User