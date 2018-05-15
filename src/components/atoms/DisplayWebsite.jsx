import React from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import faGlobe from '@fortawesome/fontawesome-free-solid/faGlobe'

function DisplayWebsite (props) {
  const {website} = props  
  return (
      <a href={website}><FontAwesomeIcon icon={faGlobe} /></a>
    );
}

export default DisplayWebsite;