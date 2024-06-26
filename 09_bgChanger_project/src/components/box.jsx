import React from 'react'
import './box.css'

function createBox({boxColor}){
    return(
        <div className='box'>
            {boxColor}
        </div>
    )
   
}

export default createBox