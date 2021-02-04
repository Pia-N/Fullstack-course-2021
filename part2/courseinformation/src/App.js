import React from 'react'
import Course from './components/Course'

const App = ({course}) => {
    
      
  // mäpätään kurssimuuttujan yksittäiset kurssikomponentit yksi kerrallaan ja otetaan id key jokaiselle 
  // course.map(course => <Course key={course.id} course = {course} />)
  console.log(course, "this is App");
    return (
      <div>
        {course.map(course => 
        <Course key={course.id} course = {course} />)}
      </div>
    )
  }
export default App  