import React, { Component } from 'react';
import SkyLight from 'react-skylight'

import AmbassadorImage from './atoms/AmbassadorImage'

class Ambassador extends Component {
  render () {
    const { ambassador } = this.props
    return (
      <div>
        <div className='ambassador-lists' onClick={() => this.simpleDialog.show()}>
          <div className='ambassador-image'>
            {ambassador && <AmbassadorImage image={ambassador.gravatarUrl} /> }
          </div>
        </div>
        <SkyLight hideOnOverlayClicked ref={ref => this.simpleDialog = ref}>
          <div className='ambassador-wrapper'>
            <div className='ambassador-image-skylight'>
              {ambassador && <AmbassadorImage image={ambassador.gravatarUrl} />}
            </div>
            <div className='ambassador-banner' />
            <div className='ambassador-name'>{ambassador.publicName}</div>
            <div className='ambassador-profile'>
              {ambassador.publicDescription}
            </div>
          </div>
        </SkyLight>
      </div>
    )
  }
}

export default Ambassador
