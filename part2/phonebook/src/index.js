import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Filter from './components/Filter'
import Add from './components/Add'
import Shown from './components/Shown';
import axios from 'axios'

const App = () => {

  const [showAll, setShowAll] = useState("")
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')

  const addName = (event) => {
    event.preventDefault()
    for (let i = 0; i < persons.length; i++) {
      if( newName === persons[i].name){
       return alert(`${newName} is already added to phonebook`)
      }
    }
    const noteObject = {
      name: newName,
      number: newNumber,
    }
    setPersons(persons.concat(noteObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNoteChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <Shown setShowAll = {setShowAll}/>
      <h2>Add a new</h2>
        <Add addName = {addName} newName = {newName} handleNoteChange = {handleNoteChange} newNumber = {newNumber} handleNumberChange = {handleNumberChange}/>
      <h2>Numbers</h2>
      <ul>
        <Filter persons = {persons} showAll = {showAll} />
      </ul>
    </div>
  )
}

ReactDOM.render(
    <App/>,
  document.getElementById('root')
);

export default App