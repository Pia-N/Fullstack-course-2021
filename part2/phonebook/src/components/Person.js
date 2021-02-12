import React from 'react'
import Button from './Button'

const Person = (props) =>{
const {person,persons,setPersons}= props
    return(   
   
    <div>
        <p>{person.name} {person.number} </p>
        <Button id = {person.id} persons = {persons} setPersons ={setPersons}/>
    </div> 
    ) 
    
}

export default Person