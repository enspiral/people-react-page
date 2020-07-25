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

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

function ProfilesGrid(props) {
  const { people } = props
  shuffleArray(people)
  return (
    <div className='typography'>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,700&display=swap" rel="stylesheet"></link>
      <h1 className='community-titles'><span style={{color:"#03A095"}}>Contributors</span> and <span style={{color:"#805298"}}>Membors</span></h1>
      <Masonry
        className={'cards'}
        style={style}
        elementType={'ul'}
        options={masonryOptions}
        disableImagesLoaded={false}
        updateOnEachImageLoad={false}
        imagesLoadedOptions={imagesLoadedOptions}
      >
        {
          map(people, (person) => {
            if(person.showOnWebsite) {
              if(person.useGravatar || person.publicProfileAirtableUrl) {
                return (<ProfileCard key={person.id} person={person} />)
              }
            }
          })
        }
      </Masonry>
    </div>
  )
}

export default ProfilesGrid
