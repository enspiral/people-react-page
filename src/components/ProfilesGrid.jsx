import React from 'react';
import Masonry from 'react-masonry-component';

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
      { people.map((item) => {return <ProfileCard person={item}/>})}
      </Masonry>
  )
}

export default ProfilesGrid;