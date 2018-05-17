import React from 'react';

function AmbassadorImage(props) {
  return (
    <div>
      <img id="ambassador-image-id" src={props.image} alt='ambassadors' width='100%' />
    </div>
  )
}

export default AmbassadorImage;    