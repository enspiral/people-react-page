import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'


class DisplayTwitter extends Component {
  render() {
    return (
      <FontAwesomeIcon icon={["fab", "twitter-square"]} />
    );
  }
}

export default DisplayTwitter;