import { useState } from 'react'
import Box from './components/box.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="boxContainer">
        <Box boxColor='purple' />
        <Box boxColor='brown' />
        <Box boxColor='purple' />
        <Box boxColor="burlywood" />
        <Box boxColor='yellow' />
        <Box boxColor='green' />
        <Box boxColor='gray' />
      </div>
    </>
  )
}

export default App
