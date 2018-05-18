import React, {Component} from 'react'
import { map } from 'lodash'

import Ambassador from './Ambassador'

class ListOfAmbassadors extends Component {
  render () {
    const { people } = this.props
    return (
      <div>
        <div className='community-titles'>Ambassadors</div>
        <div className='ambassadors'>
          {map(people, (person, key) => {
            return person.isAmbassador &&
              <Ambassador key={key} ambassador={person} />
          })}
        </div>
      </div>
    )
  }
}
export default ListOfAmbassadors
