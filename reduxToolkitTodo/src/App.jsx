import { useState } from 'react'

import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Todo App</h1>

<br />
   <h2>
    Learn about Redux Toolkit
   </h2>
   <AddTodo></AddTodo>
   <Todos></Todos>
  
    </>
  )
}

export default App
