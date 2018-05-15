import React from 'react';
import Masonry from 'react-masonry-component';
import {map} from 'lodash'

import ProfileCard from './ProfileCard'

const masonryOptions = {
  transitionDuration: 0
};
const imagesLoadedOptions = { background: '.my-bg-image-el' }

function ProfilesGrid (props) {
  const { people } = props
  return (
    <Masonry
      className={'my-gallery-class'} 
      elementType={'ul'} 
      options={masonryOptions} 
      disableImagesLoaded={false} 
      updateOnEachImageLoad={false} 
      imagesLoadedOptions={imagesLoadedOptions} 
      >
      {/* {people.forEach((item, key) => {return <ProfileCard person={item}/>})} */}
      {map(people, (person, key) => {
        return <ProfileCard key={key} person={person} />
      }) }
      </Masonry>
  )
}

export default ProfilesGrid;