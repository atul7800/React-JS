import Chai from './chai'

// JS files should have extention .jsx not .js
// Import variable should always be in cammel case, e.g. Chai

function app() {
  
  return (
    // return must contain only one parent element, that's why we hae used a div to wrap and treat 2 elements as 1
    <>
     <h1>Chai aur react with vite</h1>
     <h2>Chai aur react with vite</h2>
     <Chai />
    </>
   
  )
}

export default app
