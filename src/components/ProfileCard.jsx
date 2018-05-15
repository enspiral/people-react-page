import React, { Component } from 'react';
import md5 from 'js-md5';

import ProfileImage from './atoms/ProfileImage'
import ProfileDescription from './atoms/ProfileDescription'
import ProfileName from './atoms/ProfileName'
import ShowTwitter from './atoms/ShowTwitter'
import ShowLinkedIn from './atoms/ShowLinkedIn'
import ShowWebsite from './atoms/ShowWebsite'

class ProfileCard extends Component {
  render(){
    const {person} = this.props
    console.log(person)
    return (
      <div className='profile-cards'>
        {person ? <ProfileImage image={person.gravatarUrl} /> : <div/>}
        <div className='profile-info'>
          {person ? <ProfileName name={person.publicName} /> : <span/>}
          
          {person ? <ShowLinkedIn linkedin={person.publicLinkedin}/> : <span/>}
          {person ? <ShowTwitter twitter={person.publicTwitter}/> : <span/>}
          {person ? <ShowWebsite website={person.publicWebsite}/> : <span/>}
        </div>

        {person ? <ProfileDescription description={person.publicDescription}/> : <span/> }
      </div>
    )
  }
}

export default ProfileCard;