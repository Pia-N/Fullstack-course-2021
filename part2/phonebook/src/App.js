import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Form from './components/Form'
import Filter from './components/Filter'
import personService from './services/personsdata'
import Notification from './components/Notification'

const App = () => {
  //  state hookit, jotka säilyttävät muuttujan tilan ja mahdollistavat sen asettamisen
  const [persons, setPersons] = useState([])
  const [newNumber, setNewNumber] = useState('')
  const [newName, setNewName] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [errorMsg, setErrorMsg] = useState(null)
  const [notificationType, setNotificationType] = useState('error')

  // useEffect-hook, joka hakee datan "palvelimelta"
  useEffect(() => {
    console.log('effect')
    personService
      .getAll()
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')


  const showPersons = newFilter.length === 0
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

  //tapahtumakäsittelijä estää sivun uudelleenlataamisen 
  // sekä luo uuden henkilöolion joka tallennetaan staten kautta lomakkeeseen.

  const addPerson = (event) => {
    event.preventDefault()
    console.log("nappia painettu", event.target);
    const personObject = {
      name: newName,
      number: newNumber
      //id: Math.floor(Math.random() * 1000000)+1
    }
    const existingPerson = (persons.find(person => person.name.toLowerCase() === newName.toLowerCase()))

    if (persons.every((person) => person.name.toLowerCase() !== newName.toLowerCase()))
    //creating a new person
    {
      personService
        .create(personObject)
        .then(response => {
          setPersons(persons.concat(response.data))
          setErrorMsg(`Person '${newName}' has been added `)
          setNotificationType('notification')

        })
        .catch(error => {
          console.log(error.response.data)
          setNotificationType('error')
          setErrorMsg(`${error.response.data.error}`)
          // pääset käsiksi palvelimen palauttamaan virheilmoitusolioon näin
          //console.log(error.response.data.error)
        })
      setTimeout(() => {
        setErrorMsg(null)
      }, 5000)
      setNewName('')
      setNewNumber('')
    }

    // a number update
    if (existingPerson) {

      if (window.confirm(`${newName} is already added to phonebook, replace the old number with the new one? `)) {
        console.log(personObject, "uudet tiedot");
        const updatePerson = { ...existingPerson, number: newNumber }

        personService
          .update(existingPerson.id, updatePerson)
          .then(response => {
            setPersons(persons.map(person => person.id !== existingPerson.id ? person : response.data))
            setErrorMsg(`'${newName}' has been updated`)
            setNotificationType('notification')
            setTimeout(() => {
              setErrorMsg(null)
            }, 5000)
          })
          .catch(error => {
            setErrorMsg(`'${newName}' was already deleted from server`)
            setNotificationType('error')
            setPersons(persons.filter(person => person.id !== existingPerson.id))
            setTimeout(() => {
              setErrorMsg(null)
            }, 5000)

          })
      }
    }
    setNewName('')
    setNewNumber('')
  }

  // tämä funktio tarkkailee input-kenttien tilaa ja asettaa uuden arvon muuttujalle
  // console.log(event.target.value), tämä tulostaa konsoliin mitä syöttökentässä lukee
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        < Notification message={errorMsg} notificationType={notificationType} />
      </div>
      <Filter value={newFilter} onChange={handleFilterChange} />
      <h3>Add a new number</h3>
      <Form addPerson={addPerson} newName={newName}
        handleNameChange={handleNameChange} newNumber={newNumber}
        handleNumberChange={handleNumberChange} setErrorMsg={setErrorMsg}
        notificationType={notificationType} setNotificationType={setNotificationType} />

      <h2>Numbers</h2>
      <Persons showPersons={showPersons} persons={persons}
        setPersons={setPersons} setErrorMsg={setErrorMsg}
      />
    </div>
  )
}


export default App

