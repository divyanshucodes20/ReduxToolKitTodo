import React,{ useEffect, useState } from 'react'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'

function App() {

  return (
<>{/*yaha pe wrap nahi kiya main.jsx e jaake wrap kiya hai*/}
< AddTodo/>
<Todos/>
</>
  )
}

export default App
