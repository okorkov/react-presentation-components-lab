import React from 'react';

const changeMood = (e) => {
  e.target.innerHTML = 'Not So Happy ANYMORE ;(((((((('
}

const SimplerComponent = (props) => {
  return (
    <div onClick={props.handleClick}>"I am just happy"</div>
  )
}

export default SimplerComponent;