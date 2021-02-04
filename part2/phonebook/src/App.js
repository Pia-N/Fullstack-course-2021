import React, { useState } from 'react'


const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas',
      id:'' }
  ]) 
  const [ newName, setNewName ] = useState('')
  //tapahtumakäsittelijä estää sivun uudelleenlataamisen 
  // sekä luo uuden henkilöolion joka tallennetaan staten kautta lomakkeeseen.
  const addName = (event) => {
    event.preventDefault()
  
  if(persons.find(person => person.name === newName))
  {
    window.alert(`${newName} is already added to phonebook`)
    setNewName("")
  }
  else {
    const personObject = {
      name: newName,
      id: newName
    }
    setPersons(persons.concat(personObject))
    setNewName("")
  }
    
}
 // tämä funktio tarkkailee input-kenttien tilaa ja asettaa uuden arvon muuttujalle
  // console.log(event.target.value), tämä tulostaa konsoliin mitä syöttökentässä lukee
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  console.log(persons.map, "this is persons map");
  return (
  
    <div>
      <h2>Phonebook</h2>

      <form onSubmit = {addName}>
        name: <input value = {newName}
        onChange = {handleNameChange} />
        <div>
        <button type="submit">add</button>
        </div>
      </form >
      <h2>Numbers</h2>
      <ul>
      {persons.map (person => 
      <li key = {person.id}>{person.name}</li>
      )}
      </ul>
      
      ...
    </div>
  )
}

export default App