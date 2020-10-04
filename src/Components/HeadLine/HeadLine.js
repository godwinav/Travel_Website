import React from 'react'
import './HeadLine.css'


const HeadLine = () => {
    return (
        <div>
            <div className='ui container'>
                <div className='events'>
                    <p data-aos="zoom-out-up"  className='add'>Coming Events</p>
                    <p data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom" className='description'>Find out about upcoming events and festivals in Chile</p>
                  </div>
                    <div data-aos="zoom-out-up" className='parts__of__Chile'>
                       <a href='#'><p className='description region'>Northern Chile</p></a> 
                        <a><p className='description region'>Central Chile</p></a>
                        <a><p className='description region'>Southern Chile</p></a> 
                    </div>
            </div>
         
        </div>
    )
}

export default HeadLine
