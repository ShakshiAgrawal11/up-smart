import React, { useState } from 'react'
import "./CartItem.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { deleteById ,editById} from '../../store/slices/CartSlice'

const CartItem = ({cartItem}) => {
    const[quantity,setQuantity]=useState(cartItem.quantity>0? cartItem.quantity:0);
    const dispatch = useDispatch();

    const handleDelete = () =>{
     // alert(cartItem.pid);
      dispatch(deleteById(cartItem.pid));
    }


    const onMinusClick = () =>{
      //alert("ADD");
      setQuantity(quantity-1) ;
      dispatch(editById({id:cartItem.pid,quant:quantity-1}));
    }
    const onPlusClick = () =>{
      //alert("ADD");
      setQuantity(quantity+1) ;
      dispatch(editById({id:cartItem.pid,quant:quantity+1}));
    }

  return (
    <div className='cart-item'>
     
      <div className='cart-wrapper'>
        <div className='cart-image'>
            <img src={cartItem.img} alt="" />
        </div>
        <div className='cart-info'>
            <h3>{cartItem.title}</h3>
            <div className='cart-icon'>
            <h5>Quantity</h5>


                   {/* <FontAwesomeIcon icon={faMinus} onClick={() => {if (quantity > 0) {setQuantity(quantity-1)}}}  /> */}
                   <FontAwesomeIcon icon={faMinus} onClick={() => {if (quantity > 1) {onMinusClick();}}}/>
           
           
               
              <div ><span>{quantity}</span></div>
              <FontAwesomeIcon  icon={faPlus} onClick={onPlusClick} />
          </div>
            
            <h5>Price : $ <span>{cartItem.price}</span></h5>
            <button onClick={handleDelete} >Remove From Cart</button>
        </div>

      </div>
    </div>
  )
}

export default CartItem
