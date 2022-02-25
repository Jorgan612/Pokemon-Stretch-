import React from 'react'
import '../CSS/Error.css'


const Error = () => {
  return (
    <div>
      <img className='ditto-error' src={require('../Assets/ditto-error-msg.png')} alt='error msg'/>
      <p>Oops!! Something went wrong!</p>
    </div>
  )
}

export default Error;