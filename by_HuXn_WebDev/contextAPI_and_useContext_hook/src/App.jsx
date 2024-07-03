import { createContext, useState } from "react";
import ComponentA from "./components/ComponentA";

export const RefCreateContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  const name = "Atul";
  const city = "gorakhpur";

  return (
    <RefCreateContext.Provider value={name}>
      <ComponentA />
    </RefCreateContext.Provider>
  );
}

export default App;
