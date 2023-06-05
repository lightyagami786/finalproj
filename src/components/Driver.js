import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Driver = () => {

  const navigate=useNavigate();

    const[where,setWhere]=useState('');
    
    const[to,setTo]=useState('');

    
        const handleSubmit=async()=>{
            let localData=localStorage.getItem('user');
            localData=JSON.parse(localData);
            // console.log('newdata ',localData);
            let {_id,email}=localData;
            // console.log('ouruser ',localData);
            //console.log(name,email,pass);
            let result=await fetch("http://localhost:5000/mydriverslist",{
               method:'post',
               body:JSON.stringify({where,to,userid:_id,email}),
               headers:{
                  'Content-Type':'application/json'
               }
            });
            result=await result.json();
            console.warn(result);
            // localStorage.setItem('user',JSON.stringify(result.result));
            
            // localStorage.setItem('token',JSON.stringify(result.auth));
            alert('saved successfully');
            navigate('/');
          
    }
    


  return (
    <>
    <div>
      <input type="text" value={where} onChange={(e)=>setWhere(e.target.value)} />where
    </div>
    <div>
      <input type="text" value={to} onChange={(e)=>setTo(e.target.value)} />to
    </div>
    <div>
        <button onClick={()=>handleSubmit()}>submit</button>
    </div>
    </>
  )
}

export default Driver
