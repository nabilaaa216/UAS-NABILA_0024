import React from 'react'
import './App.css'

function App() {
  return (
    <div className="mb-3">

      <div className="mb-3">
        <div className="w-75">
          <h1 className="fw-bold">Institut Widya Pratama</h1>
          <h3>Welcome Back!</h3>
          <div className="mb-3">
            <img 
              src="/public/images/LOGIN.jpg" 
              alt="Login Visual" 
              className="img-fluid h-100 w-100 object-fit-cover"
              style={{ objectFit: 'cover' }}
            />
          </div>

          <form>
            <div className="mb-3">
              <input
                type="email"
                className="form-control rounded-pill"
                placeholder="Email Address"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control rounded-pill"
                placeholder="Password"
              />
            </div>
            <div className="mb-3 text-start">
              <a href="#" className="text-decoration-none small">Forgot Password</a>
            </div>
            <button type="submit" className="btn btn-dark rounded-pill w-100">
              Login
            </button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default App