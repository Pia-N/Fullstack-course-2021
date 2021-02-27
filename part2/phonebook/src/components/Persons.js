import React from 'react'
import Person from './Person.js'

const Persons = (props) => {
    const { showPersons, persons, setPersons, setErrorMsg } = props
    return (
        showPersons.map((person) =>
            <div key={person.name}>
                <Person person={person} persons={persons} setPersons={setPersons}
                    setErrorMsg={setErrorMsg} />
            </div>
        ))
}
export default Persons