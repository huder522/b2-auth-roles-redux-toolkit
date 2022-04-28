import { AppDispatch } from '../../store';
import { fetchWithoutToken } from '../../../utils/fetch';
import { SigninResponse } from '../../../interfaces/auth-responses';
import { signIn } from './userSlice';
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
      
    } catch (error) {
      alert('something went wrong!')
    }
  }
}