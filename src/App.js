import React, {useState,useEffect} from 'react';
import Display from './components/Display';
import './App.css'

// apikey: c5c9021ab88eb53dd028c7f87c6dd03e

function App() {
  const [city_name, setCity_name] = useState('')
  const [dummy,setDummy] = useState('')
  const [weatherData, setWeatherData] = useState(null);
  const value = (e)=>{
    setDummy(e.target.value)
  }
  const click =()=>{
    setCity_name(dummy)
  }
  useEffect(() => {
    async function fetchWeather() {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=c5c9021ab88eb53dd028c7f87c6dd03e`);
      const data = await response.json();
      try{
          data.wind.speed += " km/hr"
          data.main.temp = Math.round(data.main.temp - 273.15) + "°C"
          console.log(data)
          setWeatherData(data);
        }catch(e){
          setWeatherData(null)
        }
    }

    fetchWeather();
}, [city_name])
  return (
    <div className='App'>
      <div className='input-div mb-3'>
        <h3 className='m-3'>City:</h3>
        <input className='search' type='text' onChange={value} placeholder='City'/>
        <button className='btn btn-sm btn-success ms-3' onClick={click}>Search</button>
      </div>
      
        {weatherData!=null ? <Display city_name={city_name} weatherData={weatherData}/>:<h1>Enter a valid City Name</h1>}
    </div>
  ) 
}

export default App;
