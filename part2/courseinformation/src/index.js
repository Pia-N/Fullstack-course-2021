import React from 'react';
import ReactDOM from 'react-dom';

const Course = ({ course }) => {
  return (
  <div>
   <Header name ={course.name} />
   <Content course = {course} />
   <Total parts = {course.parts}/>
   </div>
  )
}

const Header = ({ name }) => {
  return (
    <h1>{name}</h1>
  )
}

const Total = ({ parts }) => {
  //const sum = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises
   
  console.log(parts)
  const sum = parts.reduce((accumulator, current) => accumulator + current.exercises, 0);
  
    return(
    <p>Number of exercises {sum}</p>
  ) 
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>    
  )
}

const Content = ({course}) => {
  console.log( "this is content");
  let osat = course.parts.map(part => <Part part = {part}/>)
  return (
   <div>
    {osat}
  </div>
  )
}

const App = () => {
  const course = [{
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
      ,
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  },
      {
        name: 'Node.js',
        id: 2,
        parts: [
          {
            name: 'Routing',
            exercises: 3,
            id: 1
          },
          {
            name: 'Middlewares',
            exercises: 7,
            id: 2
          }
        ]
      }
    ]
    
let courses = course.map(course => <Course course = {course} />)
console.log(course, "this is App");
  return (
    <div>
      {courses}
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))
