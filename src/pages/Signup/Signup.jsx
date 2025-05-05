
import React from 'react'
import "./Signup.css"
import { Link } from 'react-router'

const Signup = () => {
  return (
    <div className='loginsignup'>
       <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <form>
          <input type="text" placeholder='Username' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
          <input type="submit" />
          </form>
        </div>
        
        <p className="loginsignup-login">
          Already have an account ?  <Link to="/login"><span>Login here</span></Link>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>I agree to terms and conditiions</p>
        </div>
       </div>
      
    </div>
  )
}

export default Signup
