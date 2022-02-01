import React from 'react'
import Countries from './Countries';

export default function Filter({countries, country, onDetails}) {

  const result = countries.filter(c => c.name.common.toLowerCase().includes(country.toLowerCase()))
  
  if(country === '') {
    return <div>Please enter the name of a country</div>
  } else {
    return (
      <Countries countries={result} onDetails={onDetails} />
    )
  }
}