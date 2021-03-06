import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'




const App = () => {
  const [ countries, setCountries] = useState([])
  const [ newFilter, setFilter ] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])
  console.log('render', countries.length, 'countries')

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }
 
  const showCountries = 
  countries.filter(country => country.name.toUpperCase().includes(newFilter.toUpperCase()))
  console.log(newFilter, "tämä on uusi filtteri");
  return (
    <div>
      <h1> Countries </h1>
      <Filter value ={newFilter} onChange = {handleFilterChange} /> 
      <Countries filter ={newFilter} countries = {showCountries} setFilter= {setFilter} />
    
     </div>
    
)}

export default App
