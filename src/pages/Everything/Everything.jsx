import React, { useEffect, useState } from 'react'
import "../../Component/Product/Product.css"
import Card from '../../Utility_Component/Card';

const Everything = () => {
    const [getApi, setGetApi] = useState([]);
      const [loading, setLoading] = useState(true)
      const[error, setError] = useState()
    
      const API = "https://dummyjson.com/products";
    
      const fetchDummyData = async () => {
        try {
          const res = await fetch(API);
          const data = await res.json();
          setGetApi(data.products);
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
    
      if(loading)
        return(
           <div>
            <h1>Loading .......</h1>
           </div>
        )
      if(error)
        return(
           <div>
            <h1>Error: {error.message}</h1>
           </div>
        )
  return (
    <>
    <div style={{marginTop: "100px"}}>
    <div className='product'>
        
        <div className="product-grid">
    {getApi.map((item) => {
      return <Card key={item.id} item ={item}/>
       
      
    })}
  </div>
  
      
    </div>
    </div>
    </>
  )
}

export default Everything


