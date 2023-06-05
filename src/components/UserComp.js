import React from 'react'

const UserComp = ({email,where,to}) => {
  return (
    <div style={{backgroundColor:'skyblue',border:'2px solid black',margin:'3px'}} >
      <div>

      
      <span>{email} </span>
      <span>{where} </span>
      <span>{to}</span>
      </div>
    </div>
  )
}

export default UserComp
