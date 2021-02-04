
import React from 'react';

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
    console.log(parts)
    const sum = parts.reduce((accumulator, current) => accumulator + current.exercises, 0);
    
      return(
      <p>Number of exercises {sum}</p>
    ) 
  }
  
  const Part = (props) => {
    return (
      <p>
        {props.name} {props.exercises}
      </p>    
    )
  }
  
  const Content = ({course}) => {
    console.log( "this is content");
    let osat = course.parts.map(part => 
    <Part key={part.id} name={part.name} exercises= {part.exercises}/>)
    return(
        <div>
            {osat}
        </div>
    )
  }
  export default Course