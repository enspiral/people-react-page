import React, { Component } from 'react';

import ProfileImage from './atoms/ProfileImage'
import InfoHeader from './molecules/InfoHeader'
import InfoDescription from './atoms/InfoDescription'

class ProfileCard extends Component {
  render(){
    const {person} = this.props
    return (
      <div className='profile-cards'>
        <ProfileImage image={person.gravatarUrl} />
        <div className='info-wrapper'>
          <div className='info-container'>
            <InfoHeader person={person}/>
            <InfoDescription description={person.publicDescription}/>
          </div>
        </div>
      </div>
    )
  }
}

export default ProfileCard;
