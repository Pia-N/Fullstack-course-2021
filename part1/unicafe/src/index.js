import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

  const voteGood = ()=> setGood(good +1)
  const voteNeutral =()=>setNeutral (neutral +1)
  const voteBad =()=>setBad(bad +1)

 return (
    <>
    < Header headerText1 = "Give feedback" />
    < Button handleClick = {voteGood} text="Good" />
    < Button handleClick = {voteNeutral} text= "Neutral" />
    < Button handleClick = {voteBad} text= "Bad" />

     <Header headerText2 = "Statistics" />
     <Statistics good = {good} neutral = {neutral} bad = {bad} />
    </>
  )
   
}
const Header = ({headerText1, headerText2}) => {
  return (
    <>
    <h1>{headerText1}</h1>
    <h2>{headerText2}</h2>
  </>
  )
}
const Button = ({handleClick,text}) => {
  return (
    <button onClick = {handleClick}>
      {text} </button>
  )
}
const Statistics = ({good, neutral, bad,})=> {
  
  const total = good + neutral + bad
  const average = ((good * 1) + (neutral * 0) + (bad * -1)) / total
  const positive = [(good / total)* 100, "%"]

  if(total <= 0){
  return(
    <>
    <p> No feedback given</p>
    </>
  )
}
return (
      <table>
        <tbody>
          <Statistic name = "Good " value = {good} />    
          <Statistic name = "Neutral " value = {neutral} />
          <Statistic name = "Bad " value = {bad} />
          <Statistic name = "Average " value = {average} />
          <Statistic name = "Positive " value = {positive} />     
        </tbody>
      </table>
  )
}
const Statistic = ({name, value}) => {
return(
  <tr>
    <td>{name}</td> 
    <td>{value}</td>
  </tr>     
  )
}
  ReactDOM.render(<App />, 
  document.getElementById('root')
)