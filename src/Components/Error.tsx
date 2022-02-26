import React from 'react'
import '../CSS/Error.css'

const Error = () => {
  return (
    <div className='error'>
      <img className='ditto-error' src={require('../Assets/ditto-error-msg.png')} alt='error msg'/>
      <p className='oops'>Oops!! Something went wrong!</p>
    </div>
  )
}

export default Error;