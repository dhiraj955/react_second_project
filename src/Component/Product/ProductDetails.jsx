import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import "./ProductDetails.css"

const ProductDetails = () => {
    const [getApi, setGetApi] = useState([]);
    const [loading, setLoading] = useState(true);
    const[error, setError] = useState()

    const params = useParams()
    const id = params.productID;   
    
        
          const fetchDummyData = async () => {
            try {
              const res = await fetch(`https://dummyjson.com/products/${id}`);
              const data = await res.json();
              setGetApi(data);
              setLoading(false)
        
            } catch (error) {
              console.log(error);
              setError(error)
              setLoading(false)
            }
          };
        
          useEffect(() => {
            fetchDummyData();
          }, []);
        

   
          if (loading) return <p>Loading...</p>;
          if (error) return <p>{error.message}</p>;

  return (
    <div className='productdetail' style={{marginTop: "100px"}}>
        <div className="product-container">
        <div className="product-left">
            <img src={getApi.thumbnail} alt={getApi.title} height="300px"  width="300px"/>
        </div>
        <div className="product-right">
            <h1>{getApi.title}</h1>
            <p className='parad'> <span>Description:</span> {getApi.description}</p>
            <p> <span>Brand: </span>{getApi.brand}</p>
            <p> <span>Category:</span>  {getApi.category}</p>
            <p> <span>Price:</span> $ {getApi.price}</p>
            <p> <span> Discount: </span>{getApi.discountPercentage} %</p>
            <p> <span>Rating:</span> {getApi.rating}</p>
            <p> <span>Status: </span>{getApi.availabilityStatus}</p>
            <p> <span>Stock: </span>  {getApi.stock}</p>
            <p> <span>Warranty:</span> {getApi.warrantyInformation}</p>
            <p className='padding'> <span>Shipping: </span>{getApi.shippingInformation}</p>

        </div>
        

        </div>
        <hr className="custom-hr" />
        <div className="reviews">
            <h1>Reviews</h1>
            {getApi.reviews.map((review, index)=>{
                return(
                    <>
                    <div key={index} className='reviews-section'>
                        <p className='
                        '><span>Name: </span> {review.reviewerName}</p>
                        <p> <span>Email: </span> {review.reviewerEmail}</p>
                        <p><span>Date: </span> {review.date}</p>
                        <p><span>Rating: </span> {review.rating}</p>
                        <p className='padding'><span>Comment: </span> {review.comment}</p>
                        <hr />

                    </div>
                    </>
                )
            })}
        </div>

        
     
    </div>
  )
}

export default ProductDetails
