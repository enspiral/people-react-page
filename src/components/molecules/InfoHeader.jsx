
import React from 'react';

import ProfileName from '../atoms/ProfileName'
import SocialIcons from './SocialIcons'

function InfoHeader (props) {
  const {person} = props
    return (
      <div className='info-header'>
        <ProfileName name={person.publicName} />
        <SocialIcons person={person}/>
      </div>
    );
  }
  
  export default InfoHeader;