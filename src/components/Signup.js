import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate=useNavigate();
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const handleSignup=async()=>{
        
            //console.log(name,email,pass);
            let result=await fetch("http://localhost:5000/register",{
               method:'post',
               body:JSON.stringify({email,password}),
               headers:{
                  'Content-Type':'application/json'
               }
            });
            result=await result.json();
            console.warn(result);
            // localStorage.setItem('user',JSON.stringify(result.result));
            
            // localStorage.setItem('token',JSON.stringify(result.auth));
            alert('signed in');
            navigate('/');
          
    }
  
    return (
    <div>
      <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
      <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} />
      <button onClick={()=>handleSignup()} >submit</button>      
        <Link to="/">login</Link>
    </div>
  )
}

export default Signup
