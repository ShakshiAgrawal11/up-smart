import React from 'react'
import "./slider.scss";

const SlideInfo = ({data}) => {
  console.log("slide-info",data)
  return (
    <div>
      <p className='heading'>{data.title}</p>
      <h3 className='slide-desc'> {data.desc}</h3>
      <button className='slide-button' onClick={()=> window.scrollTo(0, 750)}>Shop Now </button>
    </div>
  )
}

export default SlideInfo
