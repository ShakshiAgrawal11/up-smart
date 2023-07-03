import React ,{useState,useEffect}from 'react'
import "./SingleProductStyle.scss"
import Navbar from '../componenets/Navbar/Navbar'
import Newsletteer from '../componenets/Newsletter/Newsleteer'
import Footer from '../componenets/Footer/Footer'
import { sizes } from '../data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from '../store/slices/CartSlice'

const SingleProduct = () => {
 
  const colors=["black","blue","gray"];
  const [quantity,setQuantity]=useState(0);

  const product = useSelector((state) => state.SinglePageReducer);

  console.log("Single Product from reducer",product);

  const dispatch = useDispatch();
  const handleAddToCart=()=>{
      dispatch(addToCart({...product,quantity:quantity}));
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const handleMinus=()=>{
  //   if(quantity<=0)
  //   {
  //     setQuantity(0);
      
  //   }
  //   else{
  //     setQuantity(quantity-1);
  //   }
    
  // }

  // const location = useLocation();
  // useEffect(async()=>{
  //   console.log("passes",location.state.from.product);
  //   const response = await  location.state.from.product;
  //   setDetail(response);
  // },[]);


  //console.log("prop of single product", location.state.product);

  return (
    <div className='sp-maincontainer'>
      <Navbar/>
      <div className='sp-wrapper'>

        <div className='sp-imageContainer'>
           <img  src={product.img} />
        </div>

        <div className='sp-infoContainer'>
            <h1>{product.title}</h1>
            <h3>{product.desc}</h3>
            <p>$ {product.price}</p>
            <div className='filt-container'>
                <div>
                    <span> Color :</span>  
                        {/* <select name="color" id="color">
                            <option value="black">Black</option>
                            <option value="blue">Dark Blue</option>
                            <option value="gray">Gray</option>
                         </select>               */}
                         <div className="color-container">
                            {colors.map(color=>{
                                return <div style={{"--color":color}}/>
                            })}
                            {/* <div style={{"--color":"black"}}/>
                            <div style={{"--color":"blue"}} />
                            <div style={{"--color":"gray"}} /> */}
                         </div>
                </div>

                <div className='size'>
                        <span> Size : </span>  
                        <select name="sizes" id="sizes">
                            {sizes.map(size =>{
                            return <option  value={size.value}>{size.label}</option>
                            } )}
                        </select>
                </div>
            </div>

            <div className='add-container'>
              <div>
                          
                  <button className='demo' disabled={quantity <=0 ? true:false}>
                   <FontAwesomeIcon icon={faMinus} onClick={() => {if (quantity > 0) {setQuantity(quantity-1)}}}  />
           
                  </button>
                 
                  <div >{quantity}</div>
                  <FontAwesomeIcon  icon={faPlus} onClick={()=>{setQuantity(quantity+1) }} />
              </div>
              <button  className='add-btn' onClick={handleAddToCart} disabled={quantity<=0 ? true:false}>Add to Cart</button>
            </div>

            


        </div>


      </div>
      <Newsletteer/>
      <Footer />
    </div>
  )
}

export default SingleProduct
