import React from 'react'
import Card from '@material-ui/core/Card'

import ProfileImage from '../atoms/ProfileImage'
import InfoDescription from '../atoms/InfoDescription'
import InfoBox from '../atoms/InfoBox'
import InfoHeader from './InfoHeader'

export function MemberCard (props) {
  const person = props.person
  return (
    <Card className='profile-cards-member'>
      <ProfileImage image={person.gravatarUrl} />
      <InfoBox>
        <InfoHeader person={person} />
        <InfoDescription description={person.publicDescription} />
      </InfoBox>
    </Card>
  )
}

export default MemberCard
