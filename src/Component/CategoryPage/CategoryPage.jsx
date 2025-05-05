import { useParams } from 'react-router';
import { useEffect, useState } from 'react';

export default function CategoryPage() {
  const { categoryName } = useParams(); // e.g. 'beauty', 'groceries'
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  
    useEffect(() => {
        setLoading(true);
        fetch(`https://dummyjson.com/products/category/${categoryName}`)
          .then(res => res.json())
          .then(data => {
            setProducts(data.products);
            setLoading(false);
          })
          .catch(err => {
            console.error(err);
            setLoading(false);
          });
      }, [categoryName]);
      

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Showing Products in: {categoryName}</h2>
  
      {loading ? (
        <p>Loading...</p>
      ) : products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="product-grid">
          {products.map((p) => (
            <div key={p.id} className="product-card">
              <img src={p.thumbnail} alt={p.title} />
              <h4>{p.title}</h4>
              <p>${p.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
  
}

