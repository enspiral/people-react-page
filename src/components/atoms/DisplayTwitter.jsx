import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'


class DisplayTwitter extends Component {
  render() {
    return (
      <div className='social-icons'>
        <FontAwesomeIcon icon={["fab", "twitter"]} size='1' color='darkgrey'/>
      </div>
    );
  }
}

export default DisplayTwitter;