import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter';

export default function App() {
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState('');

  const api_key = process.env.REACT_APP_API_KEY
  console.log(api_key);

  useEffect(() => {
    console.log('effect')
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
      Find countries <input type = "text" placeholder="Search..." id="formulario"
      onChange={event => setCountry(event.target.value)}></input>
      <div>
          <Filter countries={countries} country={country} onDetails={onDetails}/>
      </div>
    </div>
  )
}