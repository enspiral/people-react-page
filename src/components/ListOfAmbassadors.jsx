import React, {Component} from 'react'
import { map } from 'lodash'

import Ambassador from './Ambassador'

class ListOfAmbassadors extends Component {
  render () {
    const { ambassadors } = this.props
    return (
      <div>
        <div className='community-titles'>Ambassadors</div>
        <div className='ambassadors'>
          {map(ambassadors, (ambassador, key) => {
            return ambassador.isAmbassador &&
              <Ambassador key={key} ambassador={ambassador} />
          })}
        </div>
      </div>
    )
  }
}
export default ListOfAmbassadors
