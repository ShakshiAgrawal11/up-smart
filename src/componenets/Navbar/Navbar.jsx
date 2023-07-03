import React ,{useState,useEffect} from 'react';
import {  Link } from "react-router-dom";
import "./Navstyle.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from  '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
  const [isLogin,setIsLogin]=useState("");
  const data=JSON.parse(localStorage.getItem("authentication"));
  console.log(data);
  
  useEffect(()=>{
    data === null ? setIsLogin(false) : setIsLogin(true);
  }, []);
     
  return (
    <div className='main-container'>
       {/* <h1 >Navbar</h1> */}
       <div className='left'>EN
          <div>
              <input text="text" placeholder='Search Here'/>
              <FontAwesomeIcon icon={faMagnifyingGlass} /> 
          </div>     
       </div>
       
       <div className='center'>
         <h1>UP SMART</h1>
       </div>
       <div className='right'>
          {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}
           <div>{ isLogin ? <>   </>:<Link to="/register" style={{textDecoration:"none", color:"black"}}>Register</Link>}</div>
           <div>{ isLogin ? <>   </>:<Link to="/login" style={{textDecoration:"none", color:"black"}}>Sign In</Link>}</div>
           <Link to="/cart" style={{textDecoration:"none" , color:"black"}}><FontAwesomeIcon icon={faCartShopping}/></Link>           
       </div>
    </div>
  )
}

export default Navbar
