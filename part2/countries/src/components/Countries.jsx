import React from 'react';
import Country from './Country';
import { ListGroup, Button, Alert } from 'react-bootstrap'

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
                borders={countries[0].borders}
                area={countries[0].area}
                coatOfArms={countries[0].coatOfArms.png}
            />
        )
    } else if(countries.length > 10) {
        return(
            <div>Too many matches, specify another filter</div>
          )
    } else if(countries.length === 0) {
        return (
            <Alert variant="danger">
              <Alert.Heading>Oh No! the country is not found!</Alert.Heading>
              <p>
                Please try to search with the name of the country in English, 
                also place only one of its letters and select from the list of 
                countries that is displayed automatically.
              </p>
            </Alert>
          );
    } else {
      return (
          countries.map((c, index) => {
              return (
                <ListGroup variant="flush" key={index}>
                    <ListGroup.Item>
                        {c.name.common} <Button variant="primary" type="submit" onClick={() => onDetails(c.name.common)}>
                            Details
                        </Button>
                    </ListGroup.Item>
                </ListGroup>
              )
          })
      );
    }
  }