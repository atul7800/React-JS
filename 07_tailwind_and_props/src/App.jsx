import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2 className='bg-green-400 p-2 pt-5 rounded-xl mb-5'>Tailwind test</h2>

      <Card/>

    </>
    
  )
}

export default App
