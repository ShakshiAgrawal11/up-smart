import React, {useEffect }from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import "./ProductStyle.scss"
import { faHeart} from '@fortawesome/free-solid-svg-icons'
import SingleProduct from '../../pages/SingleProduct'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { addData } from "../../store/slices/SinglePageData";


const ProductItem = ({product}) => {
  //console.log("Shirt Product",product);
  const navigate = useNavigate();
  const dispatch=useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick=()=>{
    console.log(product);
    dispatch(addData(product));
    navigate("/single");
  }
 
  return (
    <div className='pi-container' onClick={handleClick}>
      <img src={product.img} />
    </div>
  )
}

export default ProductItem
