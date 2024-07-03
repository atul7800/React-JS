import Chai from "./chai";

// JS files can have extention .jsx or .js
// Import variable should always be in cammel case, e.g. Chai

function App() {
  // return must contain only one parent element, that's why we hae used a div to wrap and treat 2 elements as 1
  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Chai aur react</h2> 
    <Chai /> 
    </>
    
  );
}

export default App;
