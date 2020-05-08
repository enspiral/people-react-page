import React from 'react';

function ProfileImage (props) {
    console.log(props.image)
    return (
        <div className='profile-image'>
          <img src={`${props.image}&s=600`} alt='name' width='100%'/>
        </div>
    )
  }

 export default ProfileImage;    