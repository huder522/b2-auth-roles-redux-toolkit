import { FC } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';
import { Role } from '../../models/others';
import { RootState } from '../../state/store';

interface Props {
  roles: Role[];
}

export const RequireRoles: FC<Props> = ({ roles }) => {
  
  const { user } = useSelector( (state: RootState) => state.user );

  return (
    roles.includes( ( user?.role || '' ) as Role )
      ? <Outlet />
      : <Navigate to="/" />
  )
}
