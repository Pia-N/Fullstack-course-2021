import React from 'react'
import Button from './Button'


const Person = ({ person, persons, setPersons, setErrorMsg }) => {

    return (

        <div>
            <p>{person.name} {person.number} </p>
            <Button id={person.id} persons={persons}
                setPersons={setPersons} setErrorMsg={setErrorMsg} />
        </div>
    )

}

export default Person