import React from 'react'
import personService from '../services/personsdata'

const handleClick = (props) => {
    const{id,persons,setPersons} = props
  console.log("nappi delete");
  console.log(id,"id");
  console.log(setPersons, "uusi tila");
  console.log(persons, "tyypit");

  if (window.confirm("Do you really want to delete your information?"))
 {
    setPersons(persons.filter(person => person.id !== id))
  return(
        personService.remove(id)
    )
 }
  
}
  

const Button = (props) => {
    
    return(
       <button onClick = {() => handleClick(props)} >
        Delete
     </button>

    )
}
export default Button