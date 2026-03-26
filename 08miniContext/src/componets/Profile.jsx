import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    const {user} = useContext(UserContext) //Access  user data 

    if(!user){
        return <h2>please login first</h2>
    }

  return (
    <div>
        Welcome {user.username}
    </div>
  )
}

export default Profile