import React from "react";
import "./Home.css";
import Product from "../../Component/Product/Product";
import LatestProduct from "../../Component/Product/LatestProduct";
import Offer from "../../Component/Offer/Offer";
import NewsLetter from "../../Component/NewsLetter/NewsLetter";
import Button from "../../Utility_Component/Button";
import { Link } from "react-router";

const Home = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-container">
          <h1>
            <span>HamroX</span> Where Fashion Meets Affordability
          </h1>
          <p>
            HamroX brings affordable, stylish products directly to your doorstep
            daily.
          </p>
          <Link to="/everything"><Button classname= "hero-btn" name="SHOP NOW"/></Link>
        </div>
      </div>
      <Offer/>
      <Product/>
      <LatestProduct/>
      <NewsLetter/>
    </>
  );
};

export default Home;
