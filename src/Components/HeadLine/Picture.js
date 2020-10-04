import React from 'react'
import './Picture.css'
import K from './T.jpg'
import M from './2.jpg'
import N from './3.jpg'

const Picture = () => {
    return (
        <div  className='images'>
          <div className='section-container'>
            <div  className='sections' >
              <a href='#'><img src={K} alt='image'/><p>Adventure is a part of life</p></a>
            </div>
            <div className='sections' >
              <a href='#'><img src={N} alt='image'/><p>Get Closer to Nature</p></a>
            </div>
            <div className='sections' >
              <a href='#'><img src={M} alt='image'/><p>More Views from the Atacama</p></a>
            </div>  
            <div  className='sections' >
              <a href='#'><img src={K} alt='image'/><p>Adventure is a part of life</p></a>
            </div>
            <div className='sections' >
              <a href='#'><img src={N} alt='image'/><p>Get Closer to Nature</p></a>
            </div>
            <div className='sections' >
              <a href='#'><img src={M} alt='image'/><p>More Views from the Atacama</p></a>
            </div>
          </div> 
        </div>
    )
}

export default Picture
