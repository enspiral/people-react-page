import React, { Component } from 'react';

class ProfileCard extends Component {
  render (){
    return (
      <div className='profile-cards'>
        <div className='profile-image'>
          <img src='https://enspiral.com/wp-content/uploads/2014/09/Logo-with-slogan.png' width='100%'/>
        </div>
        
        {/* nav symbols */}
        <div className='venture-nav-links'>
          <span className='nav-symbols'><img src='https://enspiral.com/wp-content/uploads/2014/09/Logo-with-slogan.png' width='100%' /></span>
          <span className='nav-symbols'><img src='https://enspiral.com/wp-content/uploads/2014/09/Logo-with-slogan.png' width='100%' /></span>
          <span className='nav-symbols'><img src='https://enspiral.com/wp-content/uploads/2014/09/Logo-with-slogan.png' width='100%' /></span>
        </div>

        <div className='venture-description'>
        At Fairground we believe in a world where purpose-driven business is business-as-usual. We’re all about mixing good business with social impact and are hugely passionate about supporting social enterprises and startups. We provide professional accounting services to Social Enterprises and Purpose-driven businesses and individuals.
        </div>
        
      </div>
    );
  }
}

export default ProfileCard;