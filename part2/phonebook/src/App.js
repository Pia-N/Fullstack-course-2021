import React, { useState } from 'react'


const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '0500 0800' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
    
  ]) 
  const [newNumber, setNewNumber] = useState('')
  const [newName, setNewName ] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const showPersons = newFilter.length === 0
  ? persons 
  : persons.filter(person => person.name.toUpperCase().includes(newFilter.toUpperCase()))
    

  //tapahtumakäsittelijä estää sivun uudelleenlataamisen 
  // sekä luo uuden henkilöolion joka tallennetaan staten kautta lomakkeeseen.
  const addName = (event) => {
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
  console.log(persons.map, "this is persons map");
  return (
  
    <div>
      <h2>Phonebook</h2>
      <div>
      <div>filter: <input value = {newFilter}
        onChange = {handleFilterChange} /> 
      </div>  
      </div> 
      <form onSubmit = {addName}>
        <div>name: <input value = {newName}
        onChange = {handleNameChange} /> 
       <div>number: <input value = {newNumber} 
        onChange ={handleNumberChange} />
        </div>
        <button type="submit">add</button>
        </div>
      </form >
  
      <h2>Numbers</h2>
      <ul>
      {showPersons.map (person => 
      <li key = {person.name}>{person.name} {person.number}</li>
      )}
      </ul>
    </div>
    )
}

export default App