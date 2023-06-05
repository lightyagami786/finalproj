import React, { useEffect, useState } from "react";
import UserComp from "./UserComp";

const User = () => {
  const [drivers, setDrivers] = useState([]);
  useEffect(() => {
    getDrivers();
  }, []);

  const getDrivers = async () => {
    let result = await fetch("http://localhost:5000/mydrivers", {});
    result = await result.json();
    setDrivers(result);
  };
  console.log(drivers);

  const searchHandle = async () => {
    // let key = event.target.value;
    let key=val1;
    let key2=val2;
    
    // console.log('key is: ',key);
    if (key && !key2) {
      let result = await fetch(`http://localhost:5000/search/${key}/x`);
      result = await result.json();
      if (result) {
        setDrivers(result);
      }
    }else if (key2 && !key) {
        let result = await fetch(`http://localhost:5000/search/x/${key2}`);
        result = await result.json();
        if (result) {
          setDrivers(result);
        }
      }else if (key && key2) {
        let result = await fetch(`http://localhost:5000/search/${key}/${key2}`);
        result = await result.json();
        if (result) {
          setDrivers(result);
        }
      } else {
      getDrivers();
    }
    // console.log("drivers are ", drivers);
  };

  const[val1,setVal1]=useState('');
  
  const[val2,setVal2]=useState('');
  
  useEffect(() => {
    searchHandle();
  }, [val1,val2]);



  return (
    <div>
      <input type="text" value={val1} onChange={(e)=>setVal1(e.target.value)} />
      where
      <input type="text" value={val2} onChange={(e)=>setVal2(e.target.value)} />
      to
      {drivers.map((item, ind) => (
        <div key={ind}>
          <UserComp email={item.email} where={item.where} to={item.to} />
        </div>
      ))}
    </div>
  );
};

export default User;
