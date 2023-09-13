import React from 'react';
import './App.css';


const App = () => {
  return (
    <>
      <div className='box'>
        <div className='inputData'>
          <input className='textArea' type='search' onChange={ (event) => {}}>

          </input>
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
        
        <div className='wind-waves-one'></div>
        <div className='wind-waves-two'></div>
        <div className='wind-waves-three'></div>
      </div>
    </>
  )
}

export default App