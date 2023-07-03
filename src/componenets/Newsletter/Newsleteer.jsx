import React from 'react'
import './style.scss'

const Newsletteer = () => {
  return (
    <div className='news-container'>
      <h1>NEWSLETTER</h1>
      <h3>GET TIMELY UPDATES FOR YOUR FAVOURITE PRODUCT</h3>
      <div className='input'>
          <input type="email" placeholder='Enter your email'/>
          <button >Send</button>
     </div>
    </div>
  )
}

export default Newsletteer
