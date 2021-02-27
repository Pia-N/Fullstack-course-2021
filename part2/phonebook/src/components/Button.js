import React from 'react'
import personService from '../services/personsdata'

/* const handleClick = (props) => { */
/*   const { id, persons, setPersons, setNotificationType, setErrorMsg } = props
/*   const ok = window.confirm("Do you really want to delete your information?")
/*   console.log("nappi delete"); */
/*   console.log(id, "id"); */
/*   console.log(setPersons, "uusi tila"); */
/*   console.log(persons, "tyypit"); */
/*  */
/*   if (ok) { */
/*     personService.remove(id) */
/*       .then(() => { */
/*         setPersons(persons.filter(person => person.id !== id)) */
/*         setErrorMsg(`'Information has been deleted`) */
/*         setNotificationType('error') */
/*         setTimeout(() => { */
/*           setErrorMsg(null) */
/*         }, 5000) */
/*       }) */
/*  */
/*   } */
/* } */


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
/*const deletePerson = (props) => {
  console.log(props, "this is deletePerson props")
}
const Button = (props) => {
  return (
    <button onClick={() => deletePerson(props)}>Delete</button>
  )
}*/

export default Button


