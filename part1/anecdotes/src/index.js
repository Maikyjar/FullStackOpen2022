import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { Container, Navbar, Modal } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
);

const object = {};
anecdotes.map((a, index) => object[index] = 0)

const App = () => {

  const [selected, setSelected] = useState(0)
  const [minVal] = useState(0)
  const [maxVal] = useState(anecdotes.length-1)
  const [clicks, setClicks] = useState(object)

  const handleClick = () => {
    let number = Math.floor(Math.random() * (maxVal - minVal + 1) + minVal)
    while(number === selected) {
      number = Math.floor(Math.random() * (maxVal - minVal + 1) + minVal)
    };
    setSelected(number);
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
    <React.Fragment>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
          <img
            alt=""
            src="/Logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Anecdote of the day
          </Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Container>
        <p>{anecdotes[selected]}</p>
        <p>has {clicks[selected]} votes</p>
        <Button onClick={handleClick} text = "next anecdote"/>
        <Button onClick={handleLeftClick} text = "votes"/>
        <Modal.Dialog>
          <Modal.Header >
            <Modal.Title>Anecdote with most votes</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{anecdotes[maxVotesAnacdotes[0]]}</p>
            <p>has {maxVotesNumber[0]} votes</p>
          </Modal.Body>
        </Modal.Dialog>
      </Container>
    </React.Fragment>
  )
  
}

ReactDOM.render(
  <App />,
document.getElementById('root')
);