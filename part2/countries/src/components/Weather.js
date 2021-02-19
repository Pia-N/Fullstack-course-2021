import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Weather = ({capital})=> {
    const [weather, setWeather] = useState (
    {
        current: {
            temperature: "",
            wind_speed: "",
            wind_dir: "",
            weather_icons: ""
        }
    })
    const api_key = process.env.REACT_APP_API_KEY
    useEffect (() => {
        axios
        .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`)
        .then(response =>{
            setWeather(response.data)
        })
    }, [capital,api_key])
    console.log(weather, "tämä on maa");
    return (
        <>
        <h2>Weather in {capital}</h2>
        <p> Temperature {weather.current.temperature} ℃ </p>
        <img src = {weather.current.weather_icons} alt = "weather icon" />
        <p> Wind {weather.current.wind_speed}, m/s, wind direction {weather.current.wind_dir}</p>
        </>

    )
    
}






export default Weather