import React, { useState } from 'react'
// import "../Signup/Signup.css"
import "./Login.css"

const Login = () => {
  const [username, setUsername] = useState("")
  const[password, setPassword] = useState("")
  const[error, setError] = useState("")

  async function handleSubmit(e){
    e.preventDefault();

    if (!username || !password) {
      setError("Both username and password are required.");
      return;
    }
    try {
      const res = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        body: JSON.stringify({ username: username, password: password }),
        headers: { "Content-Type": "application/json" },
      });
      if(!res.ok){
        throw new Error("something went wrong")
      }
      alert("logged in succesfully")
      setError("")

      setUsername("");
      setPassword("");
      
    } catch (error) {
      setError(error)
    }

  }






  return (
    <div className='loginsignup'>
       <div className="loginsignup-cont">
        <h1>Login Here</h1>
        {error && <p className="error">{error}</p>}
        <div className="loginsignup-fields">
          <form onSubmit={handleSubmit}  >
          
          <input type="text" placeholder='Username'
          value={username}
          onChange={(e)=>{setUsername(e.target.value)}}
           />
           <br /> <br />
          <input type="password" placeholder='Password'
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
           /> <br /> <br />
           <p>Forget Password ?</p>
           <input className='login-btn'  type="Submit" />
           </form>
        </div>


        
       </div>
      
    </div>
  )
}

export default Login
