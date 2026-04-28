import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [state,setState] = useState(5)
  return (
    <>
    
    <h1>hello react </h1>
    adding one year {state}
    <br />
    <button onClick={ ()=>{setState(state+1)}}>Add one year</button>
    </>
  )
}

export default App
