import React, { Component } from 'react';

function AmbassadorDescription(props) {
    return (
      <div className='ambassador-profile'>
        {props.description}
      </div>
    );
}

export default AmbassadorDescription;