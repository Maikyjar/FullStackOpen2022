import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Weather from './Weather'


export default function Country ({name, capital, population, languages, flag, continent}) {

    const [weather, setWeather] = useState(null);

    

    useEffect(() => {
        const params = {
          access_key: '293ddaa2128192e682bb3161f8070695',
          query: capital[0].toLowerCase()
        }
        axios
          .get(`http://api.weatherstack.com/current`, {params})
          .then(response => {
            const data = response.data
            setWeather(data)
          }).catch(console.log)
      }, [])

    return (
      <div>
        <h3>{name}</h3>
        <p>Capital {capital}</p>
        <p>Populaton {population.toLocaleString()}</p>
        <ul>Languagues
            {Object.values(languages).map( (language) => 
            <li key = {language}>{language}</li>)}
        </ul>
        <p>Continent {continent}</p>
        <img src= {flag} alt='flag'></img>
        <h3>Weather in {capital}</h3>
        {weather?<Weather weather={weather}/>:<div>Cargando...</div>}
    </div>
    )
}