import React from 'react'

const Form = ({addPerson,newName,handleNameChange,newNumber,handleNumberChange}) => {
    return (
     <form onSubmit = {addPerson}>
      <div>name: <input value = {newName}
      onChange = {handleNameChange} /> 
     <div>number: <input value = {newNumber} 
      onChange ={handleNumberChange} />
      </div>
      <button type= "submit">add</button>
      </div>
    </form >
    )
}
export default Form