import React, { Component } from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'

class DisplayLinkedIn extends Component {
  render() {
    return (
      <div className='social-icons'>
        <FontAwesomeIcon icon={["fab", "linkedin"]} size='1' color='darkgrey'/>
      </div>
    );
  }
}

export default DisplayLinkedIn;