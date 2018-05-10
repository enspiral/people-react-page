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
        {person['Personal email'] ? <ProfileImage image={'https://www.gravatar.com/avatar/' + md5(person['Personal email'].toLowerCase()) + '?s=200'} /> : <div/>}
        <div className='profile-info'>
          {person.Name ? <ProfileName name={person.Name} /> : <span/>}
          
          {person.linkedin ? <ShowLinkedIn linkedin={person.linkedin}/> : <span/>}
          {person.twitter ? <ShowTwitter twitter={person.twitter}/> : <span/>}
          {person.website ? <ShowWebsite website={person.website}/> : <span/>}
        </div>

        {person['Your bio / introduction'] ? <ProfileDescription description={person['Your bio / introduction']}/> : <span/> }
      </div>
    )
  }
}

export default ProfileCard;

// if key missing || if key exists but value missing {don't show}
// if key exists && key has value {show}