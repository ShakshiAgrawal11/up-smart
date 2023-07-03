import React, { useState } from 'react'
import "./RegisterStyle.scss"
import { Link, useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import {addUser} from "../store/slices/UserSlice"

const Register = () => {
  const [errorMsg,setErrorMsg] = useState(false);
  const[data,setData]=useState({
    fname:"",
    lname:"",
    username:"",
    email:"",
    password:"",
    confirmPassword:""
  });
 
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
    if(data.password!== data.confirmPassword){
      setErrorMsg(true);
     
    }else{
      setErrorMsg(false);
      dispatch(addUser(data));
      localStorage.setItem("authentication", JSON.stringify({password:data.password,userName:data.username}));
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
    console.log(data);
  }

  const handleInput=(e)=>{
      const name=e.target.name;
      const value=e.target.value;
      setData({...data , [name]:value });
      console.log(data);
  }

  return (
    <div className='register-maincontainer'>
       <div className='register-wrapper'>
           <h1>Create An Account</h1>

           <form action="submit" onSubmit={handleSubmit} >

                <input type="text" name='fname' placeholder='First Name' value={data.fname} onChange={handleInput} required/>
                <input type="text" name='lname' placeholder='Last Name' value={data.lname} onChange={handleInput} required/>
                <input type="text"   name="username" placeholder="Username" value={data.username} onChange={handleInput} required/>
                <input type="email" name='email' placeholder='Email' value={data.email} onChange={handleInput} required/>
                <input type="password" name='password' placeholder='Password' value={data.password} onChange={handleInput} required/>
                <input type="password" name='confirmPassword' placeholder='Confirm Password' value={data.confirmPassword} onChange={handleInput} required/>

                <h3>By Creating this account,I am agreeing with the <span>PRIVACY POLICY</span></h3>
                {errorMsg && <p style={{color:"red",letterSpacing:"2px",marginTop:"1rem"}}> Wrong Password ,Please Check Your Password And Try Again  Wrong Password                   </p>}
              <button>Create</button>
           </form>
       </div>
    </div>
  )
}

export default Register
