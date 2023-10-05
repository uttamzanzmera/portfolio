import React from 'react'

function Education(props) {
  document.title = `${props.name}`;
  return (
    <div>
      {props.name}
    </div>
  )
}

export default Education
