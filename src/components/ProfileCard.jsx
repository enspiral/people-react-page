import React, { Component, Fragment } from 'react'

import MemberCard from './molecules/MemberCard'
import ContributorCard from './molecules/ContributorCard'

class ProfileCard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      person: props.person,
      gravatarStatus: 404,
      airtableStatus: 404
    }
  }

  componentDidMount () {
    if (this.state.person.gravatarUrl) {
      fetch(this.state.person.gravatarUrl)
      .then((res) => {
        this.setState({
          gravatarStatus: res.status
        })
      }).catch((err) => {
        console.log(err)
      })
    }
    if (this.state.person.publicProfileAirtableUrl) {
      fetch(this.state.person.publicProfileAirtableUrl)
      .then((res) => {
        console.log(this.state.person.publicProfileAirtableUrl)
        this.setState({
          airtableStatus: res.status
        })
      }).catch((err) => {
        console.log(err)
      })
    }
  }
  render () {
    const {person} = this.props
    if (this.state.gravatarStatus !== 404 || this.state.airtableStatus !== 404) {
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
