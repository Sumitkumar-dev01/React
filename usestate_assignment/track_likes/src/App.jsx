import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseState from './hooks/UseState'
import UseReducer from './hooks/UseReducer'
import FormValidation from './hooks/FormValidation'
import UseEffect from './hooks/UseEffect'
import Usememo1 from './hooks/Usememo1'
import Usememo2 from './hooks/Usememo2'

function App() {
  const [likes, setlikes] = useState(0)

  return (
    <>
      {/* {likes}
      <button onClick={()=>setlikes(likes+1)} className='bg-gray'>like</button> */}
      {/* <UseState/> */}
      {/* <UseReducer/> */}
      {/* <FormValidation/> */}
      {/* <UseEffect/> */}
      {/* <Usememo1/> */}
      <Usememo2/>
    </>
  )
}

export default App
