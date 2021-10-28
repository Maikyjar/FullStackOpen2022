import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
};

const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
);

const Options = (props) => {
  return (
    <div>
      <p>{props.option1} {props.counter1}</p>
      <p>{props.option2} {props.counter2}</p>
      <p>{props.option3} {props.counter3}</p>
    </div>
  )
};

const All =(props) => {
  return (
    <div>
      <>{props.name} {props.addAll}</>
    </div>
  )
};

const Average =(props) => {
  return (
    <div>
      <p>{props.name} {props.average}</p>
    </div>
  )
};

const Positive =(props) => {
  return (
    <div>
      <p>{props.name} {props.avegareGood}</p>
    </div>
  )
};

const Statitics = ({good, neutral, bad}) => {
 
  if (good + neutral + bad > 0){
  return (
    <table>
      <tbody>
      <tr>
        <td><Options option1 = "good" /></td> 
        <td><Options counter1 = {good} /></td>
      </tr>
      <tr>
        <td><Options option2 = "neutral" /></td>
        <td><Options counter2 = {neutral} /></td>
      </tr>
      <tr>
        <td><Options option3 = "bad" /></td>
        <td><Options counter3 = {bad} /></td>
      </tr>
      <tr>
        <td><All name = "all" /></td>
        <td><All addAll = {good + neutral + bad} /></td>
      </tr>
      <tr>
        <td><Average name = "average" /></td>
        <td><Average average = {((good * 1) + (neutral * 0) + (bad * -1)) / (good + neutral + bad)} /></td>
      </tr>
      <tr>
        <td><Positive name = "positive" /></td>
        <td><Positive avegareGood = {(good / (good + neutral + bad)) * 100} /></td>
        <td>%</td>
      </tr>
      </tbody>
    </table>
  );
  } else {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }  
}

const App = () => {

  const course = {
    name: "give feedback",
    subname: "statitics"
  };

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const voteForGood = () => {
    setGood(good + 1)
  }

  const voteForNeutral = () => {
    setNeutral(neutral + 1)
  }

  const voteForBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Header course ={course.name} />
      <Button onClick={voteForGood} text ="good" />
      <Button onClick={voteForNeutral} text ="neutral" />
      <Button onClick={voteForBad} text ="bad" />
      <Header course ={course.subname} />
      <Statitics good ={good} neutral ={neutral} bad = {bad} />
    </div>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);


