import React, { Component } from 'react';


class ShowWebsite extends Component {
  render() {
    return (
      <span className='nav-symbols'><a href={this.props.website}><img src='/_images/_earth-globe.svg' alt='website-link' width='80%' /></a></span>
    );
  }
}

export default ShowWebsite;