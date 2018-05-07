import React, { Component } from 'react';


import ProfileImage from './atoms/ProfileImage'
import ProfileDescription from './atoms/ProfileDescription'
import ProfileName from './atoms/ProfileName'
import ShowTwitter from './atoms/ShowTwitter'
import ShowLinkedIn from './atoms/ShowLinkedIn'
import ShowWebsite from './atoms/ShowWebsite'

class ProfileCard extends Component {
  // To do: extract constructor 
  constructor() {
    super();

    this.state = {
      name: 'Susan Basterfield',
      description: 'I’m a catalyst, cultivator, convenor and curator, helping individuals and organisations experiment with new ways of working and being. I’m a member of the Golden Pandas livelihood pod, serve as an Enspiral Foundation Catalyst, engage in acts of ambassador-ing, and work with teams worldwide as a coach and facilitator. I convene Teal NZ, with over 350 members. And I like to write.',
      linkedin: 'https://www.linkedin.com/in/susan-basterfield-ab8104/',
      twitter: 'https://www.linkedin.com/in/susan-basterfield-ab8104/',
      website: 'https://www.opentogrow.com' 
    }
  }

  render (){
    return (
      <div className='profile-cards'>
        <ProfileImage/>
        <div className='profile-info'>
          <ProfileName name={this.state.name}/>
          <ShowLinkedIn linkedin={this.state.linkedin}/>
          <ShowTwitter twitter={this.state.twitter}/>
          <ShowWebsite website={this.state.website}/>
        </div>
        <ProfileDescription description={this.state.description}/>
      </div>
    );
  }
}

export default ProfileCard;

// if key missing || if key exists but value missing {don't show}
// if key exists && key has value {show}