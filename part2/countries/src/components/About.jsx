import React from 'react';
import { Container } from 'react-bootstrap'

export default function About() {
    return (
    <Container>
        <h2>Hello everyone...</h2>
        <p>This is one of my first projects in the React library, this application is executed consuming two APIs https://restcountries.com/ and http://api.weatherstack.com/ which requires payment to make HTTPS requests, so which should allow non-secure Content in the browser to be able to see the weather of the capital of each country, its development was carried out through the use of Hooks with functional components, I use React Bootstrap for the styles and for the responsive functionality, in addition React Router V6 for routes, Thank you very much for visiting.</p>
    </Container>
    )
}