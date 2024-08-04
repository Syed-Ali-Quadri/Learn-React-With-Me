import React from 'react'

function Button({text, style}) {
  return (
    <div className=''>
      <button className={`px-3 py-1 ${style} m-3 rounded-md`}>{text}</button>
    </div>
  )
}

export default Button
