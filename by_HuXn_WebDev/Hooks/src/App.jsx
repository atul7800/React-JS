import { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    document.title = `Value is ${value}`;
  }, []);

  return (
    <>
      <h1>{value}</h1>
      <button onClick={() => setValue(value + 1)}>Click</button>
    </>
  );
}

export default App;
