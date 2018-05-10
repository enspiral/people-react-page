import React, { Component } from 'react';

import ProfileImage from './atoms/ProfileImage'
import ProfileDescription from './atoms/ProfileDescription'
import ProfileName from './atoms/ProfileName'
import ShowTwitter from './atoms/ShowTwitter'
import ShowLinkedIn from './atoms/ShowLinkedIn'
import ShowWebsite from './atoms/ShowWebsite'

function ProfileCard (props) {
    return (
      <div className='profile-cards'>
        <ProfileImage image={props.person.fields['Personal email']}/>
        <div className='profile-info'>
          <ProfileName name={props.person.fields.Name}/>
          <ShowLinkedIn linkedin={props.linkedin}/>
          <ShowTwitter twitter={props.twitter}/>
          <ShowWebsite website={props.website}/>
        </div>
        <ProfileDescription description={props.person.fields['Your bio / introduction']}/>
      </div>
    );
  
}

export default ProfileCard;

// if key missing || if key exists but value missing {don't show}
// if key exists && key has value {show}