import React from 'react'




const Countries  = (props) => {
const {countries, filter} = props
    console.log(countries.length, "maat lista");
    if(filter === '' || countries.length === 0){
        return (
          <div></div>
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
    else if (countries.length >= 2)
    {
    return (
      <div>
      {countries.map ((country) => 
      <p key = {country.numericCode}>{country.name}  </p>)}
      </div>
      )
    }

}
  
  export default Countries