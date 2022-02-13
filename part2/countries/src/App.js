import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter';
import { Container, Navbar, Form, Col, Row, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


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
    <Router>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand >Countries</Navbar.Brand>
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <Routes>
        <Route path='about' element={<About />}>
        </Route>
        <Route path='/'
        element={
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
                autoComplete="off"
                id="formulario"
                onChange={event => setCountry(event.target.value)}/>
            </Col>
          </Row>
          <br />
          <Filter countries={countries} country={country} onDetails={onDetails}/>
        </div>
        }>
        </Route>
      </Routes>
    </Router>
  )
}