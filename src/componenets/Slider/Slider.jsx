import React,{useState} from 'react'
import "./slider.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft} from '@fortawesome/free-solid-svg-icons'
import Slide from './Slide';
import {slideData} from  '../../data'

const Slider = () => {
  const [slideIndex,setSlideIndex]=useState(0);
  console.log(slideData);

  const handleClick = (direction) => {
    if(direction==="left"){
      setSlideIndex(slideIndex > 0 ? slideIndex-1 : slideData.length-1);
    }else{
      setSlideIndex(slideIndex > slideData.length ? setSlideIndex+1 : 0); 
    }
  }

  return (
    <div className='mainContainer'>
     
        {/* <FontAwesomeIcon icon={faAngleLeft} direction='left' id='arrow-left' onClick={()=>{handleClick("left")}}/> */}
        <div className="Wrapper" >
            {/* <div className='slide'>
                <div className='imageContainer'>cc</div>
                <div className='infoContainer'></div>

            </div> */}
           {slideData.map(slideData => {
              return <Slide key={slideData.id} data={slideData}/>
           })}
            {/* <Slide/>
            <Slide/> */}
        </div>
        {/* <FontAwesomeIcon icon={faAngleRight} direction='right' id='arrow-right' onClick={()=>{handleClick("right")}}/> */}
       
     
    </div>
  )
}

export default Slider
