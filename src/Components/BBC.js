import React from 'react';


const BBC=()=>{
   return(
    <h1 className='bbc'onLoad={()=>{window.open('https://sessions-beryl.vercel.app/');return null}}  >BBC</h1>
   )
   
  
};

export default BBC;