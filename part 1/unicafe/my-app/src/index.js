import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  console.log(props, "this is App");
  
  const [good, setGood] = useState(0)
  const voteGood = ()=> setGood(good +1)
  

  const [neutral, setNeutral] = useState(0)
  const voteNeutral =()=>setNeutral (neutral +1)
  

  const [bad, setBad] = useState(0)
  const voteBad =()=>setBad(bad +1)
  

  const [total]= [good + neutral + bad]
  const [average] = [((good * 1) + (neutral * 0) + (bad * -1)) / total]
  const [positive] = [(good / total)* 100]

 return (
    <>
    <h1>Give feedback</h1>
    < Button handleClick = {voteGood} 
      text="Good" />
    < Button handleClick = {voteNeutral} 
      text= "Neutral" />
    < Button handleClick = {voteBad}
      text= "Bad" />

    <h2>Statistics</h2>
    < Statistics name = "Good" value = {good} />
    < Statistics name = "Neutral" value = {neutral} />
    < Statistics name = "Bad" value = {bad} />
    < Statistics name = "Total" value = {total} />
    < Statistics name = "Average" value = {average} />
    < Statistics name = "Positive" value = {positive} mark= "%"/>
  </>
  )
   
}
const Button = (props) => {
  return (
    <button onClick = {props.handleClick}>
      {props.text} 
    </button>
  )
}
const Statistics = (props)=> {
  return(
    <div>
     {props.name} {props.value} {props.mark}
   </div>
  )
}


ReactDOM.render(<App />, 
  document.getElementById('root')
)
