import React from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faGlobe from '@fortawesome/fontawesome-free-solid/faGlobe'

function DisplayWebsite (props) {
  const {website} = props  
  return (
      <a href={website}><FontAwesomeIcon icon={faGlobe} /></a>
    );
}

export default DisplayWebsite;