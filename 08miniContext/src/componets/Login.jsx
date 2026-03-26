import React, {useState, useContext}from 'react'
import UserContext from '../context/UserContext'


function Login() {
    const [username, setUsername]= useState('');
    const [Password, setPassword] = useState('')

    const {setUser}= useContext(UserContext)

     const handleSubmit= (e)=>{
        e.preventDefault()
        setUser({username, Password})
     }

  return (
    <div>
        <h1>Login</h1>
        <input
        value={username}
        onChange={(e)=>{setUsername(e.target.value)}}
         type="text" placeholder='username' />
         
        {" "}
        <input 
        value={Password}
        onChange={(e)=>{setPassword(e.target.value)}}
        type="text" placeholder='Password' />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login