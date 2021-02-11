import React from 'react'


const Country = (props) => {
    const {country} = props
    console.log(country.flag, "tämä on yksi maa");
    return (
      <div>
      <h2> {country.name}</h2>
      <p> Capital: {country.capital} </p>
      <p> Population: {country.population} </p>
      <h2>Languages:</h2>
      <ul> 
      {country.languages.map ((language) =>
       <li key={language.name}>
                {language.name}
       </li>
      )}
      </ul>
      <div>
      <img src= {country.flag} alt={`${country.name} flag`} 
      width='25%' height='25%'></img>
      </div>
    </div>
    )
  }
  export default Country