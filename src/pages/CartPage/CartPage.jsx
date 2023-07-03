import React ,{useEffect ,useState} from 'react';
import {  Link } from "react-router-dom";
import "./CartPage.scss"
import Navbar from '../../componenets/Navbar/Navbar'
import CartItem from '../../componenets/CartItem/CartItem'
import Newsletteer from '../../componenets/Newsletter/Newsleteer'
import Footer from '../../componenets/Footer/Footer'
import { useDispatch, useSelector } from "react-redux";
import { deleteAllCart } from '../../store/slices/CartSlice';

const CartPage = () => {

  const [totalAmount,setTotalAmount]=useState(0);
  const [totalItems,setTotalItems]=useState(0);
   
    
  const cartProducts = useSelector((state) => state.CartReducer);
  console.log("Cart Product Page----",cartProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    //window.scrollTo(0, 0); 
    let totalAmount=0;
    let totalItems=0;
    cartProducts.map((item)=>{
      totalAmount+=item.price*item.quantity;
      totalItems+=item.quantity;
    })
    setTotalAmount(totalAmount);
    setTotalItems(totalItems);
  }, [cartProducts]);
   
 
  const handleAllDelete = () => {
      setTotalAmount(0);
      dispatch(deleteAllCart());
    }

  // const calculateAmount=()=>{
  //     let totalAmount=0;
  //     cartProducts.map((item)=>{
  //       totalAmount+=item.price*item.quantity;
  //     })
  //     setTotalAmount(totalAmount);
  // }

  // const handleBuyClick=()=>{
  //    calculateAmount();
  // }
   


  return (
    <div className='cart-maincontainer'>
        <Navbar/>           
        <p className='cart-heading'>My Cart</p>
        <div className='cart'>
        <Link to="/"> <button>CONTINUE SHOPPING</button></Link>
            <h3>Cart Contains <span style={{color:"coral"}}>{totalItems}</span>  items</h3>
            <Link to="/login"> <button onClick={()=>alert("Do you want to check out?")}>CHECKOUT</button></Link>
        </div>

        <div className='cart-container'>
          { cartProducts.length!=0  ?cartProducts.map(item=>{
            return <CartItem key={item.id} cartItem={item}/>
          }): <h2 style={{color:"Gray"}}> CART IS EMPTY</h2>}
        </div>

        <div className='buy-buttonContainer'>
              <button className='buy-button' onClick={handleAllDelete}>REMOVE ALL ITEM</button>
              <button className='buy-button' >BUY</button>
        </div>
       
        <div className='amount-container'>Total Amount : $ {totalAmount}</div>

        <Newsletteer/>
        <Footer/>
    </div>
  )
}

export default CartPage
