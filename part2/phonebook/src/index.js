import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Filter from './components/Filter'
import Add from './components/Add'
import Shown from './components/Shown';
import Notification from './components/Notification';
import personService from './services/personService';
import './index.css'

const App = () => {

  const [showAll, setShowAll] = useState("")
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [notification, setNotification] = useState({
    text: null,
    error: false,
  })

  useEffect(() => {
    console.log('effect')
    personService
      .getAll()
      .then(initialPerson => {
        setPersons(initialPerson)
      })
  }, [])

  const updatePerson = (person) => {
    if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
      const changedPerson = {...person, number: newNumber}
        personService
          .update(person.id, changedPerson)
          .then(updatePerson => {
            setPersons(persons.map(p => p.id !== person.id ? p : updatePerson))
            setNotification({...notification, text: `${person.name}'s number has been changed`})
            setNewName('')
            setNewNumber('')
            setTimeout(() => {
              setNotification({...notification, text: null})
            }, 2000)
          })
          .catch(error => {
            setNotification({text: `Information of ${person.name} has already been removed from server`, error: true})
            setTimeout(() => {
              setNotification({text: null, error: false})
            }, 2000)
          })
       }
  }

  const addName = (event) => {
    event.preventDefault()
    const noteObject = {
      name: newName,
      number: newNumber,
    }
    
    for (let i = 0; i < persons.length; i++) {
      if( newName === persons[i].name){
       return updatePerson(persons[i])
      }
    }
    personService
      .create(noteObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNotification({...notification, text: `Added ${noteObject.name}`})
        setNewName('')
        setNewNumber('')
        setTimeout(() => {
          setNotification({...notification, text: null})
        }, 2000)
      })
  }

  const handleNoteChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const personDelete = (id, name) => {
    if(window.confirm(`Delete ${name} ?`)) {
      personService
        .remove(id)
        .then(() => {
          setPersons(oldPersons => oldPersons.filter(p => p.id !== id))
          setNotification({text: `${name} was removed`, error: true})
          setTimeout(() => {
            setNotification({text: null, error: false})
          }, 2000)
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <Notification message={notification}/>
        <Shown setShowAll = {setShowAll}/>
      <h2>Add a new</h2>
        <Add addName = {addName} newName = {newName} handleNoteChange = {handleNoteChange} newNumber = {newNumber} handleNumberChange = {handleNumberChange}/>
      <h2>Numbers</h2>
      <ul>
        <Filter persons = {persons} showAll = {showAll} personDelete = {personDelete}/>
      </ul>
    </div>
  )
}

ReactDOM.render(
    <App/>,
  document.getElementById('root')
);

export default App