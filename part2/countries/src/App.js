import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter';
import { Container, Navbar, Form, Col, Row} from 'react-bootstrap'

export default function App() {
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState('');

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        const data = response.data
        setCountries(data)
      }).catch(console.log)
  }, [country])

  function onDetails(id) {
    setCountries(oldCountries => oldCountries.filter(c => c.name.common === id))
  };

  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Countries</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <div className='container'>
        <Row>
          <Form.Label column="lg" lg={2}>
            Find countries:
          </Form.Label>
          <Col xs={5}>
            <Form.Control
              className="me-2"
              aria-label="Search"
              type = "search" 
              placeholder="Search..." 
              id="formulario"
              onChange={event => setCountry(event.target.value)}/>
          </Col>
        </Row>
        <br />
        <div>
            <Filter countries={countries} country={country} onDetails={onDetails}/>
        </div>
      </div>
    </div>
  )
}