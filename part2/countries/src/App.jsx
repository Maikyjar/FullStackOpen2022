import React, { useState, useEffect } from 'react'
import axios from 'axios'










const App = () => {
  const [all, setAll] = useState([])
  const [showAll, setShowAll] = useState("")


  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        const data = response.data
        setAll(data)
      }).catch(console.log)
  }, [])

const filterCountries = (watch) => {
  const countrySearch =
    watch.filter( (countries) => {
      if (showAll == "" ){
        return "";
      } else if (countries.name.common.toLowerCase().includes(showAll.toLowerCase())){
        return countries.name.common;
      }
    })
  const result =
    countrySearch 
    .map( (country) =>
    <li>
    <span key = {country.name.common} >{country.name.common}</span>
    <button key = {country} onClick={handleClick(country)}>show</button>
    </li>)
  if (result.length > 10){
    return "Too many matches, specify another filter"
  } else if (result.length === 1) {
    return filterCountry(countrySearch[0])
  } else {
    return result
  }
};

const handleClick = (country) => {
  return filterCountry(country)
}

const filterCountry = (country) => {
  return (
    <div key = {country.name.common}>
      <h2>{country.name.common}</h2>
      <p>Capital {country.capital}</p>
      <p>Populaton {country.population}</p>
      <h4>Languagues</h4>
      {Object.values(country.languages).map( (language) => 
      <li key = {language}>{language}</li>)}
      <img src= {country.flags.png}></img>
    </div>
  )
}    

  return (
    <>
      find countries <input type = "search" placeholder="Search..." id="formulario"
      onChange={event => setShowAll(event.target.value)}></input>
      <form>
        {filterCountries(all)}
      </form>
    </>
  )
}

export default App
