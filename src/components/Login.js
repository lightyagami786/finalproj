import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate=useNavigate();
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    
    const handleLogin=async()=>{
        let result=await fetch('http://localhost:5000/login',{
            method:'post',
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json',
                  
            }
        });
        result=await result.json();
        console.log(result);
        if(result.result!=="no user found" && result.result!=="oh plz"  ){
            alert('logged in')
            console.log(result.user)
            localStorage.setItem('user',JSON.stringify(result.user));
            
            // localStorage.setItem('token',JSON.stringify(result.auth));
            navigate('/home');
        }else{
            alert('oh please ')
        }
    }
    
    return (
    <div>
      <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
      <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} />
      <button onClick={()=>handleLogin()} >submit</button>
      <Link to="/signup">signup</Link>
    </div>
  )
}

export default Login
