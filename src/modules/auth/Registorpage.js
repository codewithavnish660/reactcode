import React from 'react'

function Registorpage() {
  return (
    <div className='container-main'>
        <div className="signup-container">
    <form className="signup-form" action="/signup" method="POST">
      <h2>Sign Up</h2>

      <div className="form-group">
        <label for="name">Full Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your full name" required/>
      </div>

      <div className="form-group">
        <label for="email">Email Address</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required/>
      </div>

      <div className="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" required/>
      </div>

      <div className="form-group">
        <label for="confirm-password">Confirm Password</label>
        <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm your password" required/>
      </div>

      <button type="submit" className="btn">Sign Up</button>

      <p className="login-link">Already have an account? <a href="/login">Login</a></p>
    </form>
  </div>
    </div>
  )
}

export default Registorpage
