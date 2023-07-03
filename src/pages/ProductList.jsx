import React, { useEffect,useState } from 'react'
import Navbar from '../componenets/Navbar/Navbar'
import "./ProductListStyle.scss"
import Products from '../componenets/Products/Products'
import Newsletteer from '../componenets/Newsletter/Newsleteer'
import { colors,sizes, sort } from '../data'

import Footer from '../componenets/Footer/Footer'
import { useDispatch, useSelector } from "react-redux";
import {getSort,sortByColor , sortInAsc ,sortInDesc} from "../store/slices/SortSlice"


const ProductList = ({product}) => {
  const[ColorChoosen,setColorChoosen]=useState("");
  const [sortChoosen,setSortChoosen]=useState("");
  //console.log("In product List",product);
  // const [selectColor,setSelectColor]=useState(null);
  // const [selectSize,setSelectSize]=useState(null);
  // const [selectSort,setSelectSort]=useState(null);
  // const color="Color";
  // const size="Size";
  // const sorts="Sort";

   const dispatch = useDispatch();
   useEffect(()=>{
     dispatch(getSort(product));
   },[]);

   const products= useSelector((state) => { return state.SortReducer;});

   console.log("!!!!products",products);

  
  // const handleSelect1 =(option)=>{
  //   console.log("OPtion selected",option);
  //   setSelectColor(option);
  // }
  // const handleSelect2 =(option)=>{
  //   console.log("OPtion selected",option);
  //   setSelectSize(option);
  // }
  // const handleSelect3 =(option)=>{
  //   console.log("OPtion selected",option);
  //   setSelectSort(option);
  // }

  const handleColorChange=(e)=>{
    if(e.target.value==="color"){
      dispatch(getSort(product));
    }
    else{
      setColorChoosen(e.target.value);
     dispatch(getSort(product));
     dispatch(sortByColor(e.target.value));
     console.log(e.target.value);
    }
     
  }

  const handleSortChange=(e)=>{
    if(e.target.value==="sort"){
      dispatch(getSort(product));
    }
    else if(e.target.value ==="asc"){
      setSortChoosen(e.target.value);
      dispatch(getSort(product));
      dispatch(sortInAsc());
      console.log(e.target.value);
    }
    else if(e.target.value==="desc"){
      setSortChoosen(e.target.value);
      dispatch(getSort(product));
      dispatch(sortInDesc());
      console.log(e.target.value);
  }

  }
  console.log("----------------------------",product);
  return (
    <div className='productList-container'>
     
      <Navbar/>
      <h1>{products[0]?.name}</h1>
      <div className='filter-container'>
        <div>
          <h3>Filter Products:</h3>
         
              {/* <Dropdown  options={colors} value={selectColor} onChange={handleSelect1} display={color}/>
              <Dropdown  options={sizes} value={selectSize} onChange={handleSelect2} display={size}/> */}
               <select name="colors" onChange={handleColorChange}>

                  {colors.map((color,index)=>{
                    return <option key={color.value} value={color.value} >{color.label}</option>
                  })}
                   
                 
              </select>
                {/* <select name="sizes" id="sizes">
                 {sizes.map(size =>{
                 
                  return <option  value={size.value}>{size.label}</option>
                 } )}
                 
                </select> */}
         
        </div>
        <div>
          <h3>Sort Products:</h3>
          <div className='select'>
              {/* <Dropdown  options={sort} value={selectSort} onChange={handleSelect3} display={sorts}/> */}
            
              <select name="sort"  onChange={handleSortChange}>
                 {sort.map(sort =>{
                 
                  return <option  value={sort.value}>{sort.label}</option>
                 } )}
                 
                </select>
          </div>
        </div>
      </div>
      <Products product={products}/>
      <Newsletteer/>
      <Footer/>
    </div>
  )
}

export default ProductList


