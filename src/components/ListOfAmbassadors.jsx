import React, {Component} from 'react';
import { map } from 'lodash'
import SkyLight from 'react-skylight'

import Ambassador from './Ambassador'

class ListOfAmbassadors extends React.Component {
  constructor(props) {
    super(props);
}

  render () {
    const { ambassadors } = this.props
    console.log(ambassadors)
      return (
        <div>
          <div className='community-titles'>Ambassadors</div>
          <div className='ambassadors'>
            {map(ambassadors, (ambassador, key) => {
              return ambassador.isAmbassador && 
                <div>
                  <div onClick={() => this.simpleDialog.show()}>
                    <Ambassador key={key} ambassador={ambassador} /> 
                  </div>
                  <SkyLight hideOnOverlayClicked ref={ref => this.simpleDialog = ref}>  
                    <div className='ambassador-wrapper'>
                      <div className='ambassador-headshot'>
                        <Ambassador key={key} ambassador={ambassador} /> 
                      </div>
                      <div className='ambassador-banner'>
                        Fancy Banner Goes Here
                      </div>
                      <div className='ambassador-name'>{ambassador.publicName}</div>
                      <div className='ambassador-profile'>
                      Enspiral is awesome! Join us!
                      </div>
                    </div>
                  </SkyLight> 
                </div>
            })}
          </div>
        </div>
      )
    }
}
export default ListOfAmbassadors;