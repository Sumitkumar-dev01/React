import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseState from './hooks/UseState'
import UseReducer from './hooks/UseReducer'
import FormValidation from './hooks/FormValidation'
import UseEffect from './hooks/UseEffect'

function App() {
  const [likes, setlikes] = useState(0)

  return (
    <>
      {/* {likes}
      <button onClick={()=>setlikes(likes+1)} className='bg-gray'>like</button> */}
      {/* <UseState/> */}
      {/* <UseReducer/> */}
      {/* <FormValidation/> */}
      <UseEffect/>
    </>
  )
}

export default App
