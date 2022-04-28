import React from 'react'

export const SigninPage = () => {
  return (
    <div className="signin-container">
      <h1>Login</h1>
      <form>
        <input 
          className="form-control mb-3"
          type="text" 
          placeholder="email"
          autoComplete="off"
        />
        <input 
          className="form-control mb-3"
          type="password" 
          placeholder="password"
          autoComplete="off"
        />
        <div className="d-grid gap-2">
          <button
            type="submit"
            className="btn btn-success"
          > 
            Sign in
          </button>
        </div>
      </form>
    </div>
  )
}
