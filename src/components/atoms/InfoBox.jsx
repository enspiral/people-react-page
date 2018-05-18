import React from 'react'

export function InfoBox (props) {
  function randomiseCardBK () {
    const index = Math.floor(Math.random() * 4)
    return `info-wrapper-${index + 1}`
  }
  return (
    <div className={randomiseCardBK()}>
      <div className='info-container'>
        {props.children}
      </div>
    </div>
  )
}

export default InfoBox
