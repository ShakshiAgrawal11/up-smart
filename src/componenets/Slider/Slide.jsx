import React from 'react'
import "./slider.scss"
import SlideInfo from './SlideInfo'
const Slide = ({data}) => {
  //console.log("Slide Data",data);
  //console.log(data.id);
  return (
    <div className='slide'>
      <div className='image-container'>
         <img src={data.img} alt="ddwqd" />
      </div>
      <div className='info-container'>
        <SlideInfo data={data}/>
      </div>
    </div>
  )
}

export default Slide
