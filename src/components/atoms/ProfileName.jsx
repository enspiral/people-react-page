import React from 'react';

function ProfileName (props) {
    return (
      <div className='profile-name'>
        {props.name}
      </div>
    );
}

export default ProfileName;