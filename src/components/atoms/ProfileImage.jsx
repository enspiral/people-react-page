import React, { Component } from 'react';
import md5 from 'js-md5';



class ProfileImage extends Component {
  // let src = this.props ? 'https://www.gravatar.com/avatar/' + md5(this.props.image.toLowerCase()) + '?s=200' : 'https://themarketingoak.files.wordpress.com/2015/07/circle-loading-animation.gif'
  render() {
    return (
        <div className='profile-image'>
          {this.props.image ? 
          <img src={'https://www.gravatar.com/avatar/' + md5(this.props.image.toLowerCase()) + '?s=200'} alt='name' width='100%'/>
          : 'https://themarketingoak.files.wordpress.com/2015/07/circle-loading-animation.gif'
          }
        </div>
    )
  }
}

 export default ProfileImage;    