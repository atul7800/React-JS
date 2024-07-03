import { useState } from 'react'

function App() {
  const [color, setColor] = useState('teal')

  return (
    <div className='w-full h-screen flex items-end justify-center bg-slate-200' style={{backgroundColor:color}}>
      <div className='fixed flex justify-center gap-12 rounded-sm align-center bottom-15 p-10 text-white buttonsContainer'>
        <div onClick={() => setColor('teal')} className='w-36 h-16 rounded-3xl flex items-center justify-center p-5' style={{backgroundColor:"teal", border:"4px solid white"}} >Teal</div>
        <div onClick={() => setColor('brown')} className='w-36 h-16 rounded-3xl flex items-center justify-center p-5' style={{backgroundColor:"brown", border:"4px solid white"}}>Brown</div>
        <div onClick={() => setColor('purple')} className='w-36 h-16 rounded-3xl flex items-center justify-center p-5' style={{backgroundColor:"purple", border:"4px solid white"}}>Purple</div>
        <div onClick={() => setColor('plum')} className='w-36 h-16 rounded-3xl flex items-center justify-center p-5' style={{backgroundColor:"plum", border:"4px solid white"}}>Plum</div>
        <div onClick={() => setColor('olive')} className='w-36 h-16 rounded-3xl flex items-center justify-center p-5' style={{backgroundColor:"olive", border:"4px solid white"}}>Olive</div>
        <div onClick={() => setColor('navy')} className='w-36 h-16 rounded-3xl flex items-center justify-center p-5' style={{backgroundColor:"navy", border:"4px solid white"}}>Navy</div>
        <div onClick={() => setColor('tan')} className='w-36 h-16 rounded-3xl flex items-center justify-center p-5' style={{backgroundColor:"tan", border:"4px solid white"}}>Tan</div>
      </div>
    </div>
  )
}

export default App
