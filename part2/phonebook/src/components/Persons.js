import React from 'react'
import Person from './Person.js'

const Persons = (props) => {
    const {showPersons,persons,setPersons} = props
    return (
    showPersons.map ((person) => 
    <div key = {person.name}>
        <Person person ={person} persons={persons} setPersons ={setPersons}/>
   </div>
    ))
}
export default Persons