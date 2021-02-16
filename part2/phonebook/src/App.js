import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Form from './components/Form'
import Filter from './components/Filter'
import personService from './services/personsdata'

const App = () => {
//  state hookit, jotka säilyttävät muuttujan tilan ja mahdollistavat sen asettamisen
  const [persons, setPersons] = useState([]) 
  const [newNumber, setNewNumber] = useState('')
  const [newName, setNewName ] = useState('')
  const [newFilter, setNewFilter] = useState('')

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
    console.log("nappia painettu",event.target);
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
        setNewName('')
        setNewNumber('')
      })
      .catch(error => {
        console.log('fail')
      })
    }
  
   // a number update
   if(existingPerson) {
     
    if (window.confirm(`${newName} is already added to phonebook, replace the old number with the new one? `)) {
    console.log(personObject,  "uudet tiedot");
    const updatePerson = {...existingPerson, number: newNumber}
     personService
    .update(existingPerson.id,updatePerson)
    .then(response => {
      setPersons(persons.map(person => person.id !== existingPerson ? person: response.data))
      setNewName('')
      setNewNumber('')
    })
    .catch(error => {
      console.log('fail')
    })
    }
  }
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
  const handleFilterChange =(event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter value = {newFilter} onChange = {handleFilterChange} />
      <Form addPerson = {addPerson} newName ={newName} 
      handleNameChange = {handleNameChange} newNumber = {newNumber} 
      handleNumberChange ={handleNumberChange} />
  
      <h2>Numbers</h2>
      <Persons showPersons = {showPersons} persons ={persons} setPersons ={setPersons}/>
    </div>
      )
}


  export default App

  