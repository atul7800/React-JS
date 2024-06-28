import { useState, useCallback, useEffect } from 'react'

function App() {
  const [length, setLength] = useState(6)

  const [includeNumbers, setIncludeNumbers] = useState('false')
  const [includeCharacters, setIncludeCharacters] = useState('false')
  const [password, setPassword] = useState('')

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if(includeNumbers){
      str += '0123456789';
    }

    if(includeCharacters){
      str += '@#_-!*&$'
    }

    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [length, includeNumbers, includeCharacters]);

  useEffect(() => {passwordGenerator()}, [length, includeNumbers, includeCharacters, passwordGenerator])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-700 overflow-hidden'>
      <h1 className='text-4xl font-semibold text-center text-white mt-4'>Password generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 mt-4'>
        <input 
        type='text'
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        />
        <button className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>

      <div className='flex justify-between text-sm gap-x-4' >
        <div className='flex items-center gap-x-2'>
          <input
          type='range'
          min={6}
          max={25}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input
          type='checkbox'
          defaultChecked={includeNumbers}
          id='numberInput'
          onChange={() => {setIncludeNumbers((prev) => !prev);
          }}
          />
          <label>Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input
          type='checkbox'
          defaultChecked={includeCharacters}
          id='numberInput'
          onChange={() => {setIncludeCharacters((prev) => !prev);
          }}
          />
          <label>Characters</label>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default App
