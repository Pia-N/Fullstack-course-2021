import React from 'react'
import personService from '../services/personsdata'



const deletePerson = (props) => {
  console.log(props, "propsit deletestä")
  const { id, persons, setPersons, setErrorMsg } = props
  const toDelete = persons.find(person => person.id === id)
  const ok = window.confirm(`Delete ${toDelete.name}`)
  if (ok) {
    personService.remove(id)
      .then(() => {
        setPersons(persons.filter(p => p.id !== id))
        setErrorMsg(`Deleted ${toDelete.name}`)
      }).catch(() => {
        setPersons(persons.filter(person => person.id !== id))
        setErrorMsg(`${toDelete.name} has already been removed`, 'error')
      })
    setTimeout(() => {
      setErrorMsg(null)
    }, 5000)
  }
}

const Button = (props) => {

  return (
    <button onClick={() => deletePerson(props)}>Delete</button>
  )
}


export default Button


