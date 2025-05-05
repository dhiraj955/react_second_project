import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";

const ProductCategory = () => {
  const [products, setProducts] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error(err));
  }, []);

  const getCategoryProducts = (key) => {
    switch (key) {
      case "men":
        return products.filter(
          (item) =>
            item.category === "mens-shirts" || item.category === "mens-shoes"
        );
      case "women":
        return products.filter(
          (item) =>
            item.category === "womens-dresses" ||
            item.category === "womens-shoes"
        );
      case "kids":
        return products.filter(
          (item) => item.category === "tops" || item.category === "kids"
        );
      default:
        return [];
    }
  };

  const filteredProducts = getCategoryProducts(categoryName);

  return (
    <div>
      <nav>
        <ul style={{ display: "flex", gap: "20px", cursor: "pointer" }}>
          <li>
            <Link to="/category/men">Men</Link>
          </li>
          <li>
            <Link to="/category/women">Women</Link>
          </li>
          <li>
            <Link to="/category/kids">Kids</Link>
          </li>
        </ul>
      </nav>

      <h2>{categoryName.toUpperCase()} PRODUCTS</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            style={{ border: "1px solid gray", padding: "10px" }}
          >
            <h4>{product.title}</h4>
            <img src={product.thumbnail} width="150" />
            <p>{product.price} USD</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
