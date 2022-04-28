import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';
import { RootState } from '../../state/store';

export const PrivateRoute = () => {

  const { user } = useSelector( (state: RootState) => state.user );

  return (
    !!user
      ? <Outlet />
      : <Navigate to="/auth/signin" />
  )
}
