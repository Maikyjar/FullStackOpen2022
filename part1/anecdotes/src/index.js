import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
);

const App = () => {

  const [selected, setSelected] = useState(0)
  const [minVal] = useState(0)
  const [maxVal] = useState(5)
  const [clicks, setClicks] = useState(
    { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
  )
  
  const handleClick = () => {
    setSelected(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal));
  };

  const handleLeftClick = () => {
    const newClicks = { 
      ...clicks,
      [selected]: clicks[selected] + 1,
    }
    setClicks(newClicks)
  };

  const maxVotesNumber = [0];
  const maxVotesAnacdotes = [0];
  for(let i = 0; i < Object.values(clicks).length; i++){
    if(Object.values(clicks)[i] > maxVotesNumber[0]){
      maxVotesNumber[0] = Object.values(clicks)[i];
      maxVotesAnacdotes[0] = [i];
    }
  };
  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {clicks[selected]} votes</p>
      <Button onClick={handleClick} text = "next anecdote"/>
      <Button onClick={handleLeftClick} text = "votes"/>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[maxVotesAnacdotes[0]]}</p>
      <p>has {maxVotesNumber[0]} votes</p>
    </div>
  )
  
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App />,
document.getElementById('root')
);