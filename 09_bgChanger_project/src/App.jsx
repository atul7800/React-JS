import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('white')

  return (
    <div className='w-full h-screen' style={{backgroundColor:color}}>
    <div className='fixed flex justify-center gap-2 rounded-sm align-center bottom-15 p-10 buttonsContainer'>
      <div onClick={() => setColor('orange')} className='rounded-xl p-5 box' style={{backgroundColor: orange}}>Orange</div>
      <div onClick={() => setColor('brown')} className='rounded-xl p-5 box' style={{backgroundColor: brown}}>Brown</div>
      <div onClick={() => setColor('purple')} className='rounded-xl p-5 box' style={{backgroundColor: purple}}>Purple</div>
      <div onClick={() => setColor('burlywood')} className='rounded-xl p-5 box' style={{backgroundColor: burlywood}}>Burlywood</div>
      <div onClick={() => setColor('olive')} className='rounded-xl p-5 box' style={{backgroundColor: olive}}>Olive</div>
      <div onClick={() => setColor('green')} className='rounded-xl p-5 box' style={{backgroundColor: green}}>Green</div>
      <div onClick={() => setColor('gray')} className='rounded-xl p-5 box' style={{backgroundColor: gray}}>Gray</div>
    </div>
</div>
  )
}

export default App
