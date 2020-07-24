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

function ProfilesGrid(props) {
  const { people } = props
  return (
    <div className='typography'>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,700&display=swap" rel="stylesheet"></link>
      <h1 className='community-titles'><span style={{color:"#03A095"}}>Contributors</span> and <span style={{color:"#805298"}}>Membors</span></h1>
      <Masonry
        className={'my-gallery-class'}
        style={style}
        elementType={'ul'}
        options={masonryOptions}
        disableImagesLoaded={false}
        updateOnEachImageLoad={false}
        imagesLoadedOptions={imagesLoadedOptions}
      >
        {
          map(people, (person, key) => {
            if(person.showOnWebsite) {
              if(person.useGravatar || person.publicProfileAirtableUrl) {
                return (<ProfileCard key={key} person={person} />)
              }
            }
          })
        }
      </Masonry>
    </div>
  )
}

export default ProfilesGrid
