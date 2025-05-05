import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className={props.classname}>{props.name}</button>
    </div>
  )
}

export default Button
