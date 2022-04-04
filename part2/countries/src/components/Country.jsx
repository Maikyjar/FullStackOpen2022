import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Weather from './Weather'
import { Card, Container, Image, Row, Col } from 'react-bootstrap';


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
      }, [apiKey,capital])

    return (
      <Container>
        <Row>
          <Col></Col>
          <Col md="auto">
            <Card border="primary">
              <Card.Header>Continent {continent}</Card.Header>
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                  <p>Capital {capital}</p>
                  <p>Populaton {population.toLocaleString()}</p>
                  <p>Area: {area.toLocaleString()}</p>
                  <ul>Languagues
                    {Object.values(languages).map( language => {
                      return (
                        <li key = {language}>{language}</li>
                      )}
                    )}
                  </ul>
                  {borders?<ul>Borders {borders.map(b => 
                    <li key={b}>{b}</li>
                    )}</ul>:<p>Without borders</p>}
                  <Image fluid={true} src= {flag} alt='flag'></Image>
                  {coatOfArms?<Image fluid={true} src= {coatOfArms} alt='coatOfArms' height={250} width={230} vspace={5} hspace={20}></Image>:''}
                <Card.Title>Weather in {capital}</Card.Title>
                  {weather?<Weather weather={weather}/>:<div>Cargando...</div>}
              </Card.Body>
            </Card>
            <br />
        </Col>
        <Col></Col>
        </Row>
      </Container>
    )
}