import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthRoutes } from './dashboards/AuthRoutes';
import { UsersRoutes } from './dashboards/UsersRoutes';
import { AppDispatch, RootState } from '../state/store';
import { startRevalidateAuth } from '../state/slices/user/userThunks';


export const AppRouter = () => {

  const dispatch: AppDispatch = useDispatch();
  const { isAuthCheck } = useSelector( (state: RootState) => state.user );

  useEffect(() => {
    dispatch( startRevalidateAuth() );
  }, [ dispatch ]);
  
  if( !isAuthCheck ) {
    return <h2>loading...</h2>
  }
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth/*" element={ <AuthRoutes />} />
          <Route path="/*" element={ <UsersRoutes /> } />
      </Routes>
    </BrowserRouter>
  )
}
