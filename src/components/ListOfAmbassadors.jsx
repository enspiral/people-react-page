import React, { Component } from 'react';

import AmbassadorImage from './atoms/AmbassadorImage'

class ListOfAmbassadors extends Component {
  render() {
    const { ambassador } = this.props
    console.log = (ambassador)
    return (
      <div className='ambassador-lists'>
        {ambassador ? <AmbassadorImage image={ambassador.gravatarUrl} /> : <div/>}
      </div>
      )
    }
  }
  
  export default ListOfAmbassadors;
  
