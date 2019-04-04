import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function DisplayTwitter(props) {
  const { twitter } = props
  return (
    <div className='social-icons'>
      <a href={twitter} target='_blank'><FontAwesomeIcon icon={['fab', 'twitter']} size='1x' color='darkgrey' /></a>
    </div>
  )
}

export default DisplayTwitter
