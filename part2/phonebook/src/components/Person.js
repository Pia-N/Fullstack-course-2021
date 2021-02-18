import React from 'react'
import Button from './Button'


const Person = ({person,persons,setPersons}) => {
    
    return(   
   
    <div>
        <p>{person.name} {person.number} </p>
        <Button id = {person.id} persons = {persons} setPersons ={setPersons}/>
    </div> 
    ) 
    
}

export default Person