import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const App = (props) => {
  
  const [good, setGood] = useState(0)
  const voteGood = ()=> setGood(good +1)

  const [neutral, setNeutral] = useState(0)
  const voteNeutral =()=>setNeutral (neutral +1)

  const [bad, setBad] = useState(0)
  const voteBad =()=>setBad(bad +1)

 return (
    <>
    <h1>Give feedback </h1>
    <button onClick = {voteGood} > good </button>
    <button onClick = {voteNeutral} > neutral </button>
    <button onClick = {voteBad} > bad </button>
    <h2>Statistics </h2>
    <ul> 
      <li>good {good}</li>
      <li>neutral {neutral}</li>
      <li>bad {bad}</li>
    </ul>  
    </>
  )
   
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
