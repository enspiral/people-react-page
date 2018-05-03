import React, { Component } from 'react';

import ProfileCard from './ProfileCard'

class ProfilesGrid extends Component {
  render() {
    return (
      <div>
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </div>
    );
  }
}

export default ProfilesGrid;