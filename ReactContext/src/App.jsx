import { useState } from 'react'
import './App.css'
import Login from './Login'
import Profile from './Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Login />
      <Profile />
    </>
  )
}

export default App
