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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ligula sem, tincidunt ut sollicitudin in, venenatis a mauris. Duis condimentum vulputate consectetur. Curabitur non neque iaculis, feugiat diam non, blandit enim. Phasellus id blandit neque. Aliquam vulputate, neque in tempus dapibus, neque est viverra ante, sit amet tincidunt justo erat vitae nunc. Aliquam sed risus enim. Donec vestibulum euismod tempor. Nulla fermentum, elit sit amet placerat dignissim, lectus tellus lacinia enim, non dictum ante justo ut nunc. Nulla in orci.
            </div>
          </div>
        </SkyLight>
      </div>
    )
  }
}

export default Ambassador;

