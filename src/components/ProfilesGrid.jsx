import React from 'react'
import Masonry from 'react-masonry-component'
import {map} from 'lodash'

import ProfileCard from './ProfileCard'

const masonryOptions = {
  transitionDuration: 0
}
const imagesLoadedOptions = { background: '.my-bg-image-el' }

const style = {
  padding: '0px'
}

function ProfilesGrid (props) {
  const { people } = props
  return (
    <div>
      <div className='community-titles'>Members & Contributors</div>
      <Masonry
        className={'my-gallery-class'}
        style={style}
        elementType={'ul'}
        options={masonryOptions}
        disableImagesLoaded={false}
        updateOnEachImageLoad={false}
        imagesLoadedOptions={imagesLoadedOptions}
      >
        {map(people, (person, key) => ( 
          <ProfileCard key={key} person={person} />
        )}
      </Masonry>
    </div>
  )
}

export default ProfilesGrid
