import { useState } from "react"; //useState is a hook to update the ui

function App() {

  //let counter = 5;

  let [counter, setCounter] = useState(0);

  const addValue =  () => {
    counter = counter + 1;
    
    if(counter <= 20){
      setCounter(counter);
      console.log(`value added ${counter}`);
    } else{
      console.log(`Value can't be more than 20`);
    }
  }

  const removeValue = () => {
    counter = counter - 1;
    if(counter<0){
      setCounter(counter);
      console.log(`value removed ${counter}`);
    } else{
      console.log(`Value can't be negative`);
    }
    
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
