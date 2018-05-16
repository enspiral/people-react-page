import React, { Component } from 'react';

import ProfileImage from './atoms/ProfileImage'
import InfoHeader from './molecules/InfoHeader'
import InfoDescription from './atoms/InfoDescription'

class ProfileCard extends Component {
  render(){
    const {person} = this.props
    function randomiseCardBK () {
      const index = Math.floor(Math.random() * 4)
      return `info-wrapper-${index + 1}`
    }
    return (
      <div className='profile-cards'>
        <ProfileImage image={person.gravatarUrl} />
        <div className={randomiseCardBK()}>
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
