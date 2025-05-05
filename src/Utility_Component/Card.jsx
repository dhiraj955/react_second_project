import React from 'react'
import Button from "../Utility_Component/Button";
import { Link } from 'react-router';

const Card = ({item}) => {
  return (
    <div className="card" key={item.id}>
          <div className="card-img">
           <Link to={`/everything/${item.id}`}> <img
              src={item.thumbnail}
              alt={item.title}
            />
            </Link>
          </div>
          <div className="card-details">
            <h3>{item.title}</h3>
            <p className="category">Category: {item.category}</p>
            <p className="price">${item.price}</p>
            <div className="card-meta">
              <span>⭐ {item.rating}</span>
              <span>Stock: {item.stock}</span>
            </div>
            <Button classname="buy-btn" name="Add to Cart"/>
          </div>
        </div>
  )
}

export default Card









