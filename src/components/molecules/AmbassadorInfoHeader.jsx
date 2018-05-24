
import React from 'react';

import AmbassadorName from '../atoms/AmbassadorName'
import SocialIcons from './SocialIcons'

function AmbassadorInfoHeader(props) {
  const { ambassador } = props
  return (
    <div className='ambassador-info-header'>
      <AmbassadorName name={ambassador.publicName} />
      <SocialIcons person={ambassador} />
    </div>
  );
}

export default AmbassadorInfoHeader;