import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import envelope from '@fortawesome/fontawesome-free-solid/faEnvelope'

function DisplayEmail (props) {
  const { email } = props
  return (
    <div className='social-icons'>
      <a href={'mailto:' + email}><FontAwesomeIcon icon={envelope} size='1x' color='#353535' /></a>
    </div>
  )
}

export default DisplayEmail
