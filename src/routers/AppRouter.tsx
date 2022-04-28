import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthRoutes } from './dashboards/AuthRoutes';
import { UsersRoutes } from './dashboards/UsersRoutes';
import { AppDispatch } from '../state/store';
import { startRevalidateAuth } from '../state/slices/user/userThunks';


export const AppRouter = () => {

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch( startRevalidateAuth() );
  }, [ dispatch ]);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth/*" element={ <AuthRoutes />} />
        <Route path="/*" element={ <UsersRoutes /> } />
      </Routes>
    </BrowserRouter>
  )
}
