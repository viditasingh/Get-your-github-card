import React from 'react'
import { useParams } from 'react-router'

function Usercard() {
    
    const {username} = useParams();
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>Usercard: {username}</div>
  )
}

export default Usercard
