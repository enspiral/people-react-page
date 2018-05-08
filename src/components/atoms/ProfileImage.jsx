import React, { Component } from 'react';
import md5 from 'js-md5';

class ProfileImage extends Component {
  render() {
    // let src = 'https://www.gravatar.com/avatar/' + md5(this.props.email.toLowerCase());
    let src = 'https://www.gravatar.com/avatar/' + md5('susan.basterfield@enspiral.com'.toLowerCase()) + '?s=200';
    return (
        <div className='profile-image'>
          <img src= {src} alt='name' width='100%'/>
        </div>
    )
  }
}

 export default ProfileImage;    