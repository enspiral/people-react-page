import React, { Component } from 'react';


class ShowTwitter extends Component {
  render() {
    return (
      <span className='nav-symbols'><a href={this.props.twitter}><img src='/_images/_twitter-logo.svg' alt='twitter-link' width='80%' /></a></span>
    );
  }
}

export default ShowTwitter;