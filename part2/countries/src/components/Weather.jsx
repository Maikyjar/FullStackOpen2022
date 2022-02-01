import React from 'react'

export default function Weather ({weather}) {
    

    return (
        <div>
            <p>Temperature: {weather.current.temperature}°</p>
            <img src= {weather.current.weather_icons} alt='weather'></img>
            <p>Status: {weather.current.weather_descriptions}</p>
            <p>wind: {weather.current.wind_speed}mph direction {weather.current.wind_dir}</p>
        </div>
    )
}
