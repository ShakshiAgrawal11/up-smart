import React from 'react';
import "./FooterStyle.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { faPhone} from '@fortawesome/free-solid-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div className='footer-container'>
      
       <div className='footer-wrapper'>
         <div className='footer-info'>
            <h2>UP SMART</h2>
            <p>Your favourite fashion store on the move brings you women’s clothing and accessories at prices and discounts that are TOO GOOD! Browse through our diverse range of products  that are meant for all shapes & sizes. Inclusivity is at the heart of Up Smart- because style knows no bounds.</p>
         </div>
         <div className='footer-contact'>
           <h2>Contact</h2>
           <div className='footer-icon'>
              <div>
                   <FontAwesomeIcon icon={faLocationDot} />
                   <p>Tonk Road, Jaipur</p>
              </div>
              <div>
                    <FontAwesomeIcon icon={faPhone} />
                   <p>+91 2867940556</p>
              </div>
              <div>
                   <FontAwesomeIcon icon={faEnvelope} />
                   <p>upsmart.contact@gmail.com</p>
              </div>
               
              
              
           </div>
         </div>
       </div>
    </div>
  )
}

export default Footer
