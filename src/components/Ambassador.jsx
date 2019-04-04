import React, { Component } from 'react';
import SkyLight from 'react-skylight'
import Card from '@material-ui/core/Card'

import AmbassadorImage from './atoms/AmbassadorImage'
import AmbassadorInfoHeader from './molecules/AmbassadorInfoHeader'
import AmbassadorDescription from './atoms/AmbassadorDescription'


class Ambassador extends Component {
  render () {
    const styles = {
        borderRadius: '50%'
    }

    const dialogStyles = {
      width: '400px',
      height: 'auto',
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
        <Card className='ambassador-lists' style={styles} onClick={() => this.simpleDialog.show()} elevation={8}>
          <div className='ambassador-image'>
            {ambassador && <AmbassadorImage image={ambassador.gravatarUrl} /> }
          </div>
        </Card>
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
