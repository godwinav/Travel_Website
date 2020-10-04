import React from 'react';
import { Button, Confirm } from 'semantic-ui-react'
import './Packages.css'
import Adventure from './1.svg'
import Couple from './2.svg'
import city from './3.svg'

const Packages=()=>{
   return(
       <>
         <div className='packages-container'>
           <div class="ui card ">
               <div class="image"><img src={Adventure}/></div>
               <div class="content">
                    <div class="header">Single</div>
                    <div class="meta"><span class="date">$300.99</span></div>
                    <div class="description">Travel the world</div>
                </div>
                <div class="extra content"><a><i aria-hidden="true" class="like icon"></i>100 People like this</a></div>
                <div><button class="ui button">Chose Plan</button></div>
          </div>
          <div class="ui card">
               <div class="image"><img src={Couple}/></div>
               <div class="content">
                    <div class="header">Couple</div>
                    <div class="meta"><span class="date">$1500.99</span></div>
                    <div class="description">Travel the world with your partner</div>
                </div>
                <div class="extra content"><a><i aria-hidden="true" class="diamond icon"></i>2000 People love this</a></div>
                <div><button class="ui button">Chose Plan</button></div>

          </div>
         <div class="ui card">
               <div class="image"><img src={city}/></div>
               <div class="content">
                    <div class="header">City Tour</div>
                    <div class="meta"><span class="date">$300</span></div>
                    <div class="description">Tour the city in style</div>
                </div>
                <div class="extra content"><a><i aria-hidden="true" class="user icon"></i>80 People like this</a></div>
               <div><button class="ui button">Chose Plan</button></div>

          </div>
           
           
      
         </div>
      </>
    )
};

export default Packages;