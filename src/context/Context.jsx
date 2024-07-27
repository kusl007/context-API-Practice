import React, { createContext } from 'react'
import { useState } from 'react';

export  const UserContext=createContext();



const Context = (props) => {
    const [user, setUser] = useState([
        {
          "id": 1,
          "name": "John Doe",
          "email": "johndoe@example.com"
        },
        {
          "id": 2,
          "name": "Jane Roe",
          "email": "janeroe@example.com"
        }
      ]
      )
    // console.log(props)
  return <UserContext.Provider value={{user, setUser}}>
  {props.children}
  </UserContext.Provider>
}

export default Context