import React, { useEffect, useState } from 'react';
import './App.css';


const App = () => {
  const [city, setCity]=useState(null)
  const [search, setSearch]=useState("Alwar")

  useEffect(()=>{
    const fetchApi = async()=>{
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=82fc7f32b34593886fa0a2471a2009b6`
      const response = await fetch(url)
      const resJson = await response.json();
      setCity(resJson.main)
    }
    fetchApi();
  },[search])
  return (
    <>
      <div className='box'>
        <div className='inputData'>
            <input 
            className='textArea' 
            type='search' 
            value={search}
            onChange={ (event) => {setSearch(event.target.value)}}>
            </input>
            <div className='wave wave-1'></div>
            <div className='wave wave-2'></div>
            <div className='wave wave-3'></div>
        </div>

       {!city ? (
        <div className='empty'>
          <p className='empty-data'>Enter a city</p>
        </div>
       ):(
        <div className='info'>
          <h2 className='location'>
            <i id='icon' className="fa-solid fa-street-view"></i>
          </h2>
          <h2 className='location-name'>{search}</h2>
          <h1 className='temp'>{city.temp}° Cel</h1>
          <h4 className='tempmin_max'>
          Min : {city.temp_min} °Cel | Max : {city.temp_max} °Cel
          </h4>
        </div>
       )
       }
       
      </div>
    </>
  )
}

export default App