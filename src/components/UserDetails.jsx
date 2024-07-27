import React, { useContext } from 'react'
import { UserContext } from '../context/Context'
import { useNavigate, useParams } from 'react-router-dom'

const UserDetails = () => {
   const {user}=useContext(UserContext)
   const {id} =useParams()
   console.log(user[id-1])
   const navigate=useNavigate()

  return (
    <div>
        <h1 className='text-4xl font-bold text-red-200'> {user[id-1].name}</h1>
        <h1 className='text-2xl font-bold text-red-200'>  {user[id-1].email}</h1>
        <button className='bg-blue-100 mt-5 px-5 py-3 rounded-lg' onClick={()=>navigate(-1)}>Go Back</button>
    </div>
  )
}

export default UserDetails