import React from 'react';

import DisplayTwitter from '../atoms/DisplayTwitter'
import DisplayLinkedIn from '../atoms/DisplayLinkedIn'
import DisplayWebsite from '../atoms/DisplayWebsite'
import DisplayEmail from '../atoms/DisplayEmail'

function InfoHeader(props) {
  const {person} = props
  return (
      <div className='social-icon-container'>
        {person.publicLinkedIn ? <DisplayLinkedIn linkedin={person.publicLinkedIn} /> : <span />}
        {person.publicTwitter ? <DisplayTwitter twitter={person.publicTwitter} /> : <span />}
        {person.publicWebsite ? <DisplayWebsite website={person.publicWebsite} /> : <span />}
        {person.publicEmail ? <DisplayEmail email={person.publicEmail} /> : <span />}
      </div>
  );
}

export default InfoHeader;