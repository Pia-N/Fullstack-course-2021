import React from 'react'
import Button from './Button'
import Country from './Country'


const Countries  = (props) => {
const {countries, filter, setFilter} = props
    console.log(countries, "maat lista");
    console.log(filter, "tämä on filter");

    if(filter === '' || countries.length === 0){
        return (
          <div>No search item given</div>
        )
     }
    else if(countries.length >= 10)
    {
    return (
    <div>
        Too many matches, please specify filter.
    </div>
    )
    }
    else if (countries.length > 1){
    return(
      countries.map((country) =>
      <div key={country.numericCode}>
        {country.name}
        <Button country = {country} setFilter={setFilter} />
        </div>)
    )
    }
    else if (countries.length === 1)
    {
    return (
      <div>
      <Country country = {countries[0]} />
      </div>
      )
    }
    else 
    {
     return (
        <div>
        {countries.map ((country) => 
        <p key = {country.numericCode}>{country.name} </p>)}
        </div>
     )
    }
    
        
}
  
  export default Countries