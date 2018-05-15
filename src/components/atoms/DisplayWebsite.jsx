import React, { Component } from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import faGlobe from '@fortawesome/fontawesome-free-solid/faGlobe'

class DisplayWebsite extends Component {
  render() {
    return (
      <FontAwesomeIcon icon={faGlobe} />
    );
  }
}

export default DisplayWebsite;