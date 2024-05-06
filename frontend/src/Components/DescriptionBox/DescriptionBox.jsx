import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descbox'>
        <div className='descbox-nav'>
            <div className='descbox-nav-box'>Description</div>
            <div className='descbox-nav-box fade'>Review (122)</div>
        </div>
        <div className='descbox-desc'>
            <p>Description</p>
            <p>This is personal review</p>
        </div>
    </div>
  )
}

export default DescriptionBox