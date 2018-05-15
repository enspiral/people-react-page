import React, { Component } from 'react';

class InfoDescription extends Component {
  render() {
    return (
        <div id='description' className='profile-description'>
          {this.props.description}
        </div>
    );
  }
}

export default InfoDescription;