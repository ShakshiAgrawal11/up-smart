import React from 'react'
import './CategoriesStyle.scss';

import { categories } from '../../data'
import CategoryItem from './CategoryItem'

const Categories = () => {
  return (
    <div className='cat-container'>
     {categories.map((item)=>{
        
        return  <CategoryItem item={item} key={item.id}/>
     })}

    </div>
  )
}

export default Categories
