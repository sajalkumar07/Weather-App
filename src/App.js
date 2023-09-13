import React from 'react';
import './App.css';


const App = () => {
  return (
    <>
      <div className='box'>
        <div className='inputData'>
          <input className='textArea' type='search' onChange={ (event) => {}}>
          </input>
            <div className='wave wave-1'></div>
            <div className='wave wave-2'></div>
            <div className='wave wave-3'></div>
        </div>
        <div className='info'>
          <h2 className='location'>
            <i className="fa-solid fa-street-view"></i>
          </h2>
          <h2 className='location-name'>Alwar</h2>
          <h1 className='temp'>5.25° Cel</h1>
          <h3 className='tempmin_max'>
          Min : 5.25° Cel | Max : 5.25° Cel
          </h3>
        </div>
      </div>
    </>
  )
}

export default App