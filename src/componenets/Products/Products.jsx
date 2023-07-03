import React, {useEffect} from 'react'
//import { products } from '../../data'
import ProductItem from './ProductItem'
import "./ProductStyle.scss"

const Products = ({product}) => {
  console.log("Products",product);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='products-container'>
      {product?.map(product =>{
        return <ProductItem key={product.pid} product={product}/>
      })}
    </div>
  )
}

export default Products
