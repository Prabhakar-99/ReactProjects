
import './App.css'
import UserContextProvider from './context/UserContextprovider'
import Login from './componets/Login'
import Profile from './componets/Profile'

function App() {
 

  return (
    <UserContextProvider>
   <h1>hello context api </h1>
   <Login/>
   <Profile/>
  
    </UserContextProvider>
  )
}

export default App
