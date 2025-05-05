import React, { useState } from "react";
import "./Header.css";
// import { Link } from "react-router";
import { FaCartArrowDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const   handleToggle = ()=> {
        setIsOpen(!isOpen)
    }
  return (
    <header className="header">
      <div className="navbar">
        <div className="navlogo">
          <Link className="link" to="/"><h1>HamroX</h1></Link>
        </div>
        <ul className={isOpen ? "navmenu navmenushow" : "navmenu"}>
          <li><Link className="link" to="/">HOME</Link></li>
          <li><Link className="link" to="/everything">EVERYTHING</Link></li>
          {/* <li><Link className="link" to="/beauty">BEAUTY</Link></li> */}
          <li><Link className="link" to="/groceries">GROCERIES</Link></li>
          <li><Link className="link" to="/addproduct">ADD PRODUCT</Link></li>
          <li><Link className="link" to="/contact">CONTACT</Link></li>
        </ul>
        <div className="cart-login">
           <Link to="/cart"> <div className="cart"><FaCartArrowDown /></div></Link>
          
          <Link to="/signup"><button className="sign-btn">SignUp</button></Link>
          <p className="cart-p">0</p>
        </div>
        <div className="ham" onClick={handleToggle}>
        {isOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        </div>
      </div>
    </header>
  );
};

export default Header;
