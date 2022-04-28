import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthRoutes } from './dashboards/AuthRoutes';
import { UsersRoutes } from './dashboards/UsersRoutes';


export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth/*" element={ <AuthRoutes />} />
        <Route path="/*" element={ <UsersRoutes /> } />
      </Routes>
    </BrowserRouter>
  )
}
