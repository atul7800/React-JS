import { useState } from "react"; //useState is a hook to update the ui

function App() {

  //let counter = 5;

  let [counter, setCounter] = useState(0);

  const addValue =  () => {
    //Interview question
    //counter = counter + 1;

    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)

    /*Above code will make the counter value 1 instead of 5*/ 

    /*The below code will add 1 five times in counter on one click of add value button
    Read the following for better explaination https://chatgpt.com/share/a09b7822-1055-412a-b0b4-ff110cf07f8e*/ 
    setCounter(prevCounterValue => prevCounterValue + 1)
    setCounter(prevCounterValue => prevCounterValue + 1)
    setCounter(prevCounterValue => prevCounterValue + 1)
    setCounter(prevCounterValue => prevCounterValue + 1)
    setCounter(prevCounterValue => prevCounterValue + 1)
    console.log("counter = ",counter)
  }

  return (
    <>
      <h1>Counter project</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br/><br/>
      
      <footer>Footer: {counter}</footer>
    </>
  )
}

export default App
