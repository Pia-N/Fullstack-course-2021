import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Form from './components/Form'
import Filter from './components/Filter'
import axios from 'axios'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [newNumber, setNewNumber] = useState('')
  const [newName, setNewName ] = useState('')
  const [newFilter, setNewFilter] = useState('')

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


  const showPersons = newFilter.length === 0
  ? persons 
  : persons.filter(person => person.name.toUpperCase().includes(newFilter.toUpperCase()))
    

  //tapahtumakäsittelijä estää sivun uudelleenlataamisen 
  // sekä luo uuden henkilöolion joka tallennetaan staten kautta lomakkeeseen.
  const addPerson = (event) => {
    event.preventDefault()
  
  if(persons.find(person => person.name === newName))
  {
    window.alert(`${newName} is already added to phonebook`)
    setNewName('')
  }
  else {
    const personObject = {
      name: newName,
      id: newName,
      number: newNumber
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
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
      <Persons showPersons = {showPersons}/>
    </div>
  )
}

export default App