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
      return (
        <div className='ambassadors'>
          {map(ambassadors, (ambassador, key) => {
            return ambassador.isAmbassador && 
              <div>
                <div onClick={() => this.simpleDialog.show()}>
                  <Ambassador key={key} ambassador={ambassador} /> 
                </div>
                <SkyLight hideOnOverlayClicked ref={ref => this.simpleDialog = ref}> Hello </SkyLight> 
              </div>
          })}
        </div>
      )
    }
}
export default ListOfAmbassadors;