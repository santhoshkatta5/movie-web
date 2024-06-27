import React from 'react'
import './button.css'

function Button({icon, name, bgcolor='#ff3700', color='#ffffff'}) {
  return (
    <div>
      <a href="#" className="mainBtn" style={{color: color, backgroundColor: bgcolor}}>
      {icon} {name} 
      </a>
    </div>
  )
}

export default Button
