import React, { useEffect, useState } from 'react';
import './App.css';


const App = () => {
  const [city, setCity]=useState(null)
  const [search, setSearch]=useState("Mumbai")

  useEffect(()=>{
    const fetchApi = async()=>{
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=82fc7f32b34593886fa0a2471a2009b6`
      const response = await fetch(url)
      
      const resJason = await response.json();
      setCity(resJason)
    }
    fetchApi();
  })
  return (
    <>
      <div className='box'>
        <div className='inputData'>
          <input className='textArea' type='search' onChange={ (event) => {setSearch(event.target.value)}}>
          </input>
            <div className='wave wave-1'></div>
            <div className='wave wave-2'></div>
            <div className='wave wave-3'></div>
        </div>

       {!city ? (
        <p className='para'>No Data Found</p>
       ):(
        <div className='info'>
          <h2 className='location'>
            <i className="fa-solid fa-street-view"></i>
          </h2>
          <h2 className='location-name'>{search}</h2>
          <h1 className='temp'>{city.main.temp}</h1>
          <h4 className='tempmin_max'>
          Min : 5.25° Cel | Max : 5.25° Cel
          </h4>
        </div>
       )
       }
       
      </div>
    </>
  )
}

export default App