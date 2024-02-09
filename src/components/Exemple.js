import React, { useState } from 'react';

export default function Exemple() {
 
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Nombre pair");

  const charlot = () => {
    
    if((count + 1) % 2 === 0)
        setMessage(count + 1 + " Nombre pair")
    else 
        setMessage(count + 1 + " Nombre impaire")

    setCount(count + 1)
  }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
       <div className='w-50 d-flex justify-content-around'>
            <button className='btn btn-primary' onClick={charlot}>+</button>
            <button className='btn btn-info'>{ count }</button>
            <button className='btn btn-success'>{ message }</button>
       </div>
    </div>
  );
}