import React from "react";
import Button from "./Button";
import "../pages/Home/Home.css"
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div style={{ textAlign: "center",  height:"100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "20px"}}>
      <h1 style={{fontSize: "5rem"}}>404</h1>
      <p style={{fontSize: "2rem"}}>Page not found</p>
      <Link to="/"><Button classname="error-button"  name="Go To HomePage"/></Link>
    </div>
  );
};

export default ErrorPage;
