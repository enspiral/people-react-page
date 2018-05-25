import React from 'react';

function InfoDescription(props) {
    return (
        <div className='profile-description'>
          {props.description}
        </div>
    );
}

export default InfoDescription