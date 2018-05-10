import React, { Component } from 'react';
import Masonry from 'react-masonry-component';

import ProfileCard from './ProfileCard'

const masonryOptions = {
  transitionDuration: 0
};
const imagesLoadedOptions = { background: '.my-bg-image-el' }

class ProfilesGrid extends Component {
  render() {
    const { people } = this.props
    return (
      <Masonry
        className={'my-gallery-class'} // default ''
        elementType={'ul'} // default 'div'
        options={masonryOptions} // default {}
        disableImagesLoaded={false} // default false
        updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
        imagesLoadedOptions={imagesLoadedOptions} // default {}
        >
        { people.map((item) => {return <ProfileCard person={item}/>})}
        </Masonry>
    )
  }
}

export default ProfilesGrid;