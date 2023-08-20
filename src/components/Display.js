import React, { useState} from 'react'
import Info from './Info';

function Display(props) {
    let arr = ["name"]
    let weather = ["description"]
    let main = ["temp","humidity","pressure"]
    let wind = ["speed"]

    if (!props.weatherData) {
        return <div>Loading...</div>
    }
    
    //props.weatherData.coord.lon , props.weatherData.coord.lat
    return (
        <div className='container'>
            <h1 style={{'marginBottom':'1rem'}}>Details:</h1>
            <div className='row'>
                {arr.map((ele)=>{
                    return(<Info title={ele.toUpperCase()} des={props.weatherData[ele]}/>)
                })}
                {main.map((ele)=>{
                    return(<Info title={ele.toUpperCase()} des={props.weatherData.main[ele]}/>)
                })}
                {weather.map((ele)=>{
                    return(<Info title={ele.toUpperCase()} des={props.weatherData.weather[0][ele]}/>)
                })}
                {wind.map((ele)=>{
                    return(<Info title={ele.toUpperCase()} des={props.weatherData.wind[ele]}/>)
                })}
            </div>
            <div className='container'>
                <a href={`http://www.google.com/maps/place/${props.weatherData.coord.lat},${props.weatherData.coord.lon}`}>Go to Map</a>
            </div>
        </div>
    )
}
export default Display;