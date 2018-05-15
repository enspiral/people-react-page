import React from 'react';

function AmbassadorImage(props) {
  return (
    <div className='ambassador-image'>
      <img id="ambassador-image" src={props.image} alt='ambassadors' width='100%' />
    </div>
  )
}

export default AmbassadorImage;    