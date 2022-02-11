import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Weather from './Weather'
import { Card } from 'react-bootstrap';


export default function Country ({name, capital, population, languages, flag, continent, borders, area, coatOfArms}) {

    const [weather, setWeather] = useState(null);

    const apiKey = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        const params = {
          access_key: apiKey,
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
        <Card border="primary" style={{ width: '40rem' }}>
          <Card.Header>Continent {continent}</Card.Header>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              <p>Capital {capital}</p>
              <p>Populaton {population.toLocaleString()}</p>
              <p>Area: {area.toLocaleString()}</p>
              <ul>Languagues
                {Object.values(languages).map( language => 
                <li key = {language}>{language}</li>)}
              </ul>
              <ul>Borders {borders.map(b => 
                <li key={b}>{b}</li>
                )}</ul>
              <img src= {flag} alt='flag'></img>
              <img src= {coatOfArms} alt='coatOfArms' height={250} width={230} VSPACE={5} HSPACE={20}></img>
            </Card.Text>
            <Card.Title>Weather in {capital}</Card.Title>
            <Card.Text>
              {weather?<Weather weather={weather}/>:<div>Cargando...</div>}
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
      </div>
    )
}