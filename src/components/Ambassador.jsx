import React, { Component } from 'react';
import SkyLight from 'react-skylight'

import AmbassadorImage from './atoms/AmbassadorImage'
import AmbassadorInfoHeader from './molecules/AmbassadorInfoHeader'
import AmbassadorDescription from './atoms/AmbassadorDescription'


class Ambassador extends Component {
  render () {
    const dialogStyles = {
      width: '400px',
      height: '500px',
      marginLeft: '-200px',
      marginTop: '-250px',
      left: '0%',
      top: '50%',
      left: '50%',
      padding: 0
    }
    const { ambassador } = this.props
    return (
      <div>
        <div className='ambassador-lists' onClick={() => this.simpleDialog.show()}>
          <div className='ambassador-image'>
            {ambassador && <AmbassadorImage image={ambassador.gravatarUrl} /> }
          </div>
        </div>
        <SkyLight 
        hideOnOverlayClicked ref={ref => this.simpleDialog = ref} 
        dialogStyles={dialogStyles}
        
        >
          <div className='ambassador-wrapper'>
            <div className='ambassador-image-skylight'>
              {ambassador && <AmbassadorImage image={ambassador.gravatarUrl} />}
            </div>
            <div className='ambassador-banner' />
              <AmbassadorInfoHeader ambassador={ambassador} />
              <AmbassadorDescription description={ambassador.publicDescription} />
          </div>
        </SkyLight>
      </div>
    )
  }
}

export default Ambassador;
