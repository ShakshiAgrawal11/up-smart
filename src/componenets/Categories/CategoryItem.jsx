import React from 'react'
import {  Link } from "react-router-dom";

const CategoryItem = ({item}) => {
  return (
    <div className='item-container'>
        <div className='item-image'>
          <img src={item.image} alt={item.name} />
        </div>
        <div className='item-info'>
            <h1>{item.title}</h1>
            <Link to={item.name}><button>Shop Now</button></Link>
        </div>
     
    </div>
  )
}

export default CategoryItem
