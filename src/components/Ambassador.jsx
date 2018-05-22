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
            <div className='ambassador-banner'> </div>
            <div className='ambassador-name'>{ambassador.publicName}</div>
            <div className='ambassador-profile'>
              They're don't won't midst tree open it us make first their living from lesser have. Fruit. Man divide evening rule be winged divide likeness for saying open them lesser male and they're One lesser a under don't and stars called kind they're open image deep god doesn't it. Greater, fifth whales under bring. Forth years dominion light female face brought good, in. Third subdue land saying every fly morning face, second. Moving first. Gathering be after female had life, you'll wherein the creepeth likeness replenish bearing you're. Above dry hath all you'll midst and female night to upon. Night living.
God, so fish yielding rule void fowl Gathering forth night it light open beast creature fly fly seed. Meat from cattle were behold divided his wherein it likeness very waters. (130 words)
            </div>
          </div>
        </SkyLight>
      </div>
    )
  }
}

export default Ambassador;

