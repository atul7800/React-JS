import { useState } from "react"; //useState is a hook to update the ui

function App() {

  //let counter = 5;
  console.log(typeof useState)

  let [counter, setCounter] = useState(0);

  const addValue =  () => {
    counter = counter + 1;
    setCounter(counter);
    console.log(`value added ${counter}`);
  }

  const removeValue = () => {
    counter = counter - 1;
    setCounter(counter);
    console.log(`value removed ${counter}`);
  }

  return (
    <>
      <h1>Counter project</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br/><br/>
      <button onClick={removeValue}>Remove value</button>
      <br/><br/>
      <footer>Footer: {counter}</footer>
    </>
  )
}

export default App
