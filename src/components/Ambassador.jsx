import React, { Component } from 'react';

import AmbassadorImage from './atoms/AmbassadorImage'

class Ambassador extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { ambassador, show } = this.props
    return (
      <div className='ambassador-lists'>
        {ambassador && <AmbassadorImage image={ambassador.gravatarUrl} /> }
      </div>
      )
    }
  }
  
  export default Ambassador;
  
