import React, { useEffect } from 'react';
import { useState,useRef } from 'react';
import "./DropDownStyle.scss"


const Dropdown = ({options,value,onChange,display}) => {
  const [isOpen,setIsOpen]=useState(false);

  const divRef=useRef();


  //code to close a particular dropdown automatically when clicked on next dropdown or outside it
  useEffect(()=>{
    console.log(divRef.current);
    const handler=(event)=>{
        //if no reference is given
        if(!divRef.current){
            return;
        }
        else if(!divRef.current.contains(event.target)){
            setIsOpen(false);
        }
        
    };
    document.addEventListener("click",handler,true);
  },[]);

  const onOptionClick=(option)=>{
    console.log("I have been clicked",option);
    setIsOpen(false);
    onChange(option);
  };

  const renderOptions=options.map((option)=>{
        return <div className="dropContainer" onClick={()=>onOptionClick(option)} key={option.value}>{option.label}</div>
  });
 


  return (
    <div ref={divRef} className="dropdown-mainContainer">
      <h4 onClick={()=>setIsOpen(!isOpen)}>{value?.label || `${display}...`}</h4>

      <div className="box">{isOpen && renderOptions}</div>
    </div>
  )
}

export default Dropdown
