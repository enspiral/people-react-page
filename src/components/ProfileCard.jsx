import React, { Component, Fragment } from 'react'

import MemberCard from './molecules/MemberCard'
import ContributorCard from './molecules/ContributorCard'

class ProfileCard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      person: props.person,
      status: 404
    }
  }

  componentDidMount () {
    fetch(this.state.person.gravatarUrl)
      .then((res) => {
        console.log('gravatarUrl status: ', res.status)
        this.setState({
          status: res.status
        })
      }).catch((err) => {
        console.log(err)
      })
  }
  render () {
    const {person} = this.props
    if (this.state.status !== 404 || this.state.person.publicProfileAirtableUrl) {
      return (
        <div className='card-wrapper'>
          {person.contributorStatus === 'Member'
            ? <MemberCard person={person} />
            : <ContributorCard person={person} /> }
        </div>
      )
    } else {
      return <Fragment />
    }
  }
}

export default ProfileCard
