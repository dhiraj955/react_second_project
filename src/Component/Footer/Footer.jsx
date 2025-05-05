import React from "react";
import "./Footer.css";
import "../Header/Header.css";
import { Link } from "react-router";
import { FaFacebook, FaInstagramSquare, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="navlogo">
          <h1>HamroX</h1>
          <p className="footerpara">HamroX – Your Choice, Our Commitment</p>
        </div>
        <div className="quicklink">
          <p className="para">Quick Links</p>
          <ul>
            <Link className="links">Home</Link>
            <Link className="links">Shop</Link>
            <Link className="links">About</Link>
            <Link className="links">Contact</Link>
          </ul>
        </div>
        <div className="customerservice">
          <p className="para">Services</p>
          <ul>
            <Link className="links">FAQs</Link>
            <Link className="links">Shipping</Link>
            <Link className="links">Return</Link>
          </ul>
        </div>
        <div className="socialmedia">
          <p className="para">Social Media</p>
          <ul className="sociallinks">
            <Link className="link">
              <FaFacebook />
            </Link>
            <Link className="link">
              <FaInstagramSquare />
            </Link>
            <Link className="link">
              <FaWhatsapp />
            </Link>
          </ul>
        </div>
      </div>
      <hr />
      <div className="copyright">
        <p>Copyright @2025 , All right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
