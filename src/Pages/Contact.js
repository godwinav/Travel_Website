import React from 'react';
import './Contact.css'



const Contact=()=>{
   return(
   
      <div className='contact'>
         <div className='content'>
            <h2>Contact Us</h2>
            <p>We will be glad to hear from you </p>
      </div>
         <div className='container'>
            <div className='container-info'>
               <div className='box'>
                  <div className='icon'><i class="fas fa-map-marker-alt"></i></div>
                  <div className='text'>
                  <h3 >Address</h3>
                  <p>San Pedro de La Paz Chile</p>
                 </div>  
               </div>
               <div className='box'>
                  <div className='icon'><i class="fas fa-phone-alt"></i></div>
                  <div className='text'>
                  <h3>Phone</h3>
                  <p>942397087</p>
                 </div>  
               </div>
               <div className='box'>
                  <div className='icon'><i class="far fa-envelope-open"></i></div>
                  <div className='text'>
                  <h3 >Email</h3>
                  <p>godwinavoada91@gmail.com</p>
                 </div>  
               </div>
               </div>
               <div className='contactform'>
                  <form>
                     <h2>Send Message</h2>
                     <div className='inputBox'>
                        <input type='text' name='' required='required'/>
                        <span>Full Name</span>
                     </div>
                     <div className='inputBox'>
                        <input type='text' name='' required='required'/>
                        <span>Email</span>
                     </div>
                     <div className='inputBox'>
                        <textarea required='required'></textarea>
                        <span>Message...</span>
                     </div>
                     <div className='inputBox'>
                        <input required='required' type='submit' value='send'></input>
                     </div>
                  </form>
               </div>
         </div>
      </div>
       
     

    )
};

export default Contact;