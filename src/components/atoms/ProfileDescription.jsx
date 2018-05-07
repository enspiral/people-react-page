import React, { Component } from 'react';

class ProfileDescription extends Component {
  render() {
    return (
        <div className='profile-description'>
          {this.props.description}
        </div>
    );
  }
}

export default ProfileDescription;

// if key missing || if key exists but value missing {don't show}
// if key exists && key has value {show}