import React from 'react'

import { Navigate, Route, Routes } from 'react-router-dom'

import { SigninPage } from '../../pages/auth/SigninPage';
import { SignupPage } from '../../pages/auth/SignupPage';


export const AuthRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="signin" element={ <SigninPage /> } />
        <Route path="signup" element={ <SignupPage /> } />
        <Route path="*" element={ <Navigate to="/auth/signin" />  } />
      </Routes>
    </>
  )
}
