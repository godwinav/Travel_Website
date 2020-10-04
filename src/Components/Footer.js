import React from 'react';
import './Footer.css'
import img1 from './1.png'


const Footer=()=>{
   return(
    <div  className='footer-container'>
        <div className='items-wrapper'>
            <div className='details'>
                    <div  className='socials'>
                        <a><i className='facebook oficial icon'></i></a>
                        <a><i className='instagram icon'></i></a>
                        <a><i className='twitter icon'></i></a>
                    </div>
                    <div className='contacts'>
                        <a>Tours</a>
                        <a>Hotels</a>
                        <a>Cruises</a>
                        <a>Destinations</a>
                        <a>Activities</a>
                        <a>Experts</a>
                        <a>Upcomings</a>
                     </div>
                     <div className='partners'>
                         <img src={img1} className='partner'/>
                     </div>
            </div>
       
            </div>
        </div>
  
      
  
   )
   
  
};

export default Footer