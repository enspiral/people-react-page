import React from 'react'

import ProfileImage from '../atoms/ProfileImage'
import InfoDescription from '../atoms/InfoDescription'
import InfoBox from '../atoms/InfoBox'
import InfoHeader from './InfoHeader'

export function ContributorCard (props) {
  const person = props.person
  return (
    <div className='profile-cards'>
      <ProfileImage image={person.gravatarUrl} />
      <InfoBox>
        <InfoHeader person={person} />
        <InfoDescription description={person.publicDescription} />
      </InfoBox>
    </div>
  )
}

export default ContributorCard
