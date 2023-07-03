import React, { useState } from 'react'
import "./LoginStyle.scss"
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [userName,setUserName]=useState("");
  const [password,setPassword]=useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data=JSON.parse(localStorage.getItem("authentication"));
    console.log(data);
    //console.log(data.userName);

    if(userName===data?.userName && password===data?.password){
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
    else{
      alert("Invalid Credentials");
    }
  }
  return (
    <div className='login-maincontainer'>
       <div className='login-wrapper'>
           <h1>Sign In</h1>
           <form action="submit" onSubmit={handleSubmit}>
                <input type="text"   name="username" placeholder="User Name" value={userName} onChange={(e)=>setUserName(e.target.value)} required/>
                <input type="password" name="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                <p>Don't Have Account?     <Link to="/register" > Create Account </Link> </p>
            
                <button>Sign In</button>
           </form>
       </div>
    </div>
  )
}

export default Login
