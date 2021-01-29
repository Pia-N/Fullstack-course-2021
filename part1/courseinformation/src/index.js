import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h1>{props.courseHeader}</h1>
    </div>
  )
}
const Content = (props) => {
  return (
    <div>
      <Part courseName={props.partsIampassing[0].name} exercises={props.partsIampassing[0].exercises} />
      <Part courseName={props.partsIampassing[1].name} exercises={props.partsIampassing[1].exercises}  />
      <Part courseName={props.partsIampassing[2].name} exercises={props.partsIampassing[2].exercises}  />
    </div>
  )
}
const Part = (props) => {
 return (
    <div>
      <p>{props.courseName} {props.exercises} </p>
    </div>
  )
}
 const Total = (props) => {
   return (
  <div>
    <p>Number of exercises
      {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} 
    </p>
  </div>
   )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
return (
    <div>
      < Header courseHeader = {course.name} /> 
      < Content partsIampassing={course.parts} />
      < Total parts={course.parts} />
      </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
