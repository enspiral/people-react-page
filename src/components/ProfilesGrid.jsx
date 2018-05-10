import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import communityData from '../example-data.js'

// import ProfileCard from './ProfileCard'
import ProfileCard from './ProfileCard'

const masonryOptions = {
  transitionDuration: 0
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }

class ProfilesGrid extends Component {
  constructor() {
    super();
    this.state = communityData 
  }

  render() {
    console.log(this.state.communityData);

    return (
      <Masonry
        className={'my-gallery-class'} // default ''
        elementType={'ul'} // default 'div'
        options={masonryOptions} // default {}
        disableImagesLoaded={false} // default false
        updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
        imagesLoadedOptions={imagesLoadedOptions} // default {}
      >
      
        {this.state.communityData ? 
          this.state.communityData.map(function(item){
            return <ProfileCard 
                    person={item}
                  />
          })
      :
        <li/>
      }
      </Masonry>
    );
  }
}

export default ProfilesGrid;