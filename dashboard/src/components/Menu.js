import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {

  const [data,setData] = useState(null)
  useEffect(()=>{
    const stored = localStorage.getItem('loggedUser')
    if (stored) {
      setData(JSON.parse(stored));
      console.log(data)
      localStorage.removeItem('sharedData');
  }
  },[])

  const [selectedMenu,setselectedMenu] = useState(0)
  const [profiledropdown,setprofiledropdown] = useState(false)

  const handleMenuClick=(index)=>{
    setselectedMenu(index)
  }
  const handleProfileClick=(index)=>{
    setprofiledropdown(!setprofiledropdown)
  }

  const menuClass = "menu"
  const activeMenu = "menu selected"

  return (



    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{textDecoration:"none"}} to="/" onClick={()=>handleMenuClick(0)}>
            <p className={selectedMenu===0?activeMenu:menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/orders" onClick={()=>handleMenuClick(1)}>
            <p className={selectedMenu===1?activeMenu:menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/holdings" onClick={()=>handleMenuClick(2)}>
            <p className={selectedMenu===2?activeMenu:menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/positions" onClick={()=>handleMenuClick(3)}>
            <p className={selectedMenu===3?activeMenu:menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/funds" onClick={()=>handleMenuClick(4)}>
            <p className={selectedMenu===4?activeMenu:menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <button className="btn primary font-weight-bold pointer" onClick={()=>{window.location.href="http://localhost:3000"}} style={{cursor:"pointer",height:"30px",width:"100px"}}>Log Out</button>
          </li>
        </ul>
        <hr />
          <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">{data}</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
