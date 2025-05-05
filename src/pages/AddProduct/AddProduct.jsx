import React, { useState } from "react";
import "./AddProduct.css";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await fetch("https://fakestoreapi.com/products", {
        method: "POST",
        body: JSON.stringify({
          title: name,
          price: parseFloat(price),
          description: description,
          category: category,
          image: image,
        }),
        headers: { "Content-Type": "application/json" },
      });

      alert("form submitted successfully");

      setName("");
      setPrice("");
      setCategory("");
      setDescription("");
    } catch (error) {
      console.log(error);
    }
  }

  //   if(loading) return(
  //     <div><h1>Loading.......</h1></div>
  //   )

  return (
    <div className="addproduct">
      <div className="addproduct-container">
        <h1>Add Product</h1>
        <div className="addproduct-fields">
          <input
            type="text"
            name="name"
            placeholder="Title"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <textarea
            type="text"
            name="description"
            rows="8"
            placeholder="Description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <button type="submit" onClick={handleSubmit}>
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
