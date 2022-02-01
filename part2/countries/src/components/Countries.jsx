import React from 'react';
import Country from './Country';

export default function Countries({countries, onDetails}) {
    if(countries.length === 1){
        return (
            <Country
                name={countries[0].name.common}
                capital={countries[0].capital}
                population={countries[0].population}
                languages={countries[0].languages}
                flag={countries[0].flags.png}
                continent={countries[0].region}
            />
        )
    } else if(countries.length > 10) {
        return(
            <div>Too many matches, specify another filter</div>
          )
    } else {
      return (
          countries.map((c, index) => {
              return (
                <div key={index}>
                    <span>{c.name.common}</span> <input onClick={() => onDetails(c.name.common)} type="submit" value="Details"/>
                </div>
              )
          })
      );
    }
  }