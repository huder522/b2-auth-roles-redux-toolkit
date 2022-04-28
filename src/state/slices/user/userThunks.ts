import { AppDispatch } from '../../store';
import { fetchWithoutToken, fetchWithToken } from '../../../utils/fetch';
import { RevalidateAuthResponse, SigninResponse } from '../../../interfaces/auth-responses';
import { setAuthCheck, signIn } from './userSlice';
import { transformToUser } from '../../../adapters/transformToUser';

export const startSignin = ( email: string, password: string) => {
  return async( dispatch: AppDispatch ) => {
    try {

      const resp = await fetchWithoutToken( '/auth/login', { email, password }, 'POST' );
      const body: SigninResponse = await resp.json();
      
      if( body.ok ) {
        localStorage.setItem('auth-app-token', body.token );
        dispatch( signIn( transformToUser( body ) ) );
      } else {
        alert( body.msg );
      }
      
    } catch (err) {
      alert('something went wrong!')
    }
  }
}

export const startRevalidateAuth = () => {
  return async( dispatch: AppDispatch ) => {
    try {
      const resp = await fetchWithToken('/auth/renew');
      const body: RevalidateAuthResponse = await resp.json();

      if( body.ok ) {
        localStorage.setItem('auth-app-token', body.token );
        dispatch( signIn( transformToUser( body )) );
      } else {
        dispatch( setAuthCheck() );
      }
      
    } catch (err) {
      dispatch( setAuthCheck() );
      alert('something went wrong!');
    }
  }
}