import React, { Component } from 'react';


class ShowLinkedIn extends Component {
  render() {
    return (
      <span className='nav-symbols'><a href={this.props.linkedin}><img src='/_images/_linkedin-sign.svg' alt='linkedin-link' width='80%' /></a></span>
    );
  }
}

export default ShowLinkedIn;