import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const chooseRandom = () => Math.floor(Math.random()*anecdotes.length)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  
  const vote = () => {
    let votesCopy = [...votes]
    votesCopy[selected] += 1
    setVotes(votesCopy)
  }
  const mostVotes = votes.indexOf(Math.max(...votes));
  
 return (
    <>
      <Header title = "Anecdote of the day" />
      <p>{props.anecdotes[selected]}</p>
      <VoteLog logged = {votes[selected]} />
      <Button handleClick = {() => setSelected(chooseRandom)} text = "Next anecdote"/>
      <Button handleClick = {vote} text = "Vote for me" />
      <Header title = "Anecdotes with most votes" />
      <Header title = "Most voted so far is" />
      <p> {props.anecdotes[mostVotes]} with {votes[mostVotes]} points </p> 
      <p> Votes log {votes.join(',')} </p>
    </>
  )
}

const Header = ({title}) =>{ 
return(
  <>
  <h2>{title}</h2>
  </>
 )
}
const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
const Button = ({handleClick, text})=> {
  return(
    <button onClick = {handleClick} >
      {text}
    </button>
  )
}
const VoteLog = (props) => {
  return(
    <>
    <p> This anecdote has {props.logged} votes </p>
    </>
  )
}

ReactDOM.render(
  <App anecdotes={anecdotes} />,document.getElementById('root')
)
