import React from 'react'
import "./Offer.css"
import Button from '../../Utility_Component/Button'
// import exclusive_image from "../../assets/exclusive_image.webp"

const Offer = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You </h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <Button classname="offers-btn" name="Check Now"/>
        </div>
        <div className="offers-right">
            <img src="/exclusive.webp" alt="" />
        </div>
      
    </div>
  )
}

export default Offer
