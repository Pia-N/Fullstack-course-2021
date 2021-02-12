import React from 'react'

const handleClick = (props) => {
  console.log(props.country,"napille annettu maa");
 
  props.setFilter(props.country.name)
  }

const Button = (props) => {
    
    return(
       <button onClick = {() => handleClick(props)} >
         Show   
       </button>

    )
}
export default Button