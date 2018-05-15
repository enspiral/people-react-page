import React, { Component } from 'react';

class DisplayLinkedIn extends Component {
  render() {
    return (
      <a href={this.props.linkedin}></a>
    );
  }
}

export default DisplayLinkedIn;