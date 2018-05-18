import React, { Component } from 'react'

import MemberCard from './molecules/MemberCard'
import ContributorCard from './molecules/ContributorCard'

class ProfileCard extends Component {
  render () {
    const {person} = this.props
    return (
      <div className='container'>
        {person.contributorStatus === 'Member'
          ? <MemberCard person={person} />
          : <ContributorCard person={person} /> }
      </div>
    )
  }
}

export default ProfileCard
