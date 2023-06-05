import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate=useNavigate();
  const handleNav=()=>{
    navigate('/whereto');
  }
  const handleNav2=()=>{
    navigate('/towhere');
  }
    return (
    <>
     <button onClick={()=>handleNav()} >going</button> 
     <button onClick={()=>handleNav2()} >need to go</button>
    </>
  )
}

export default Home
