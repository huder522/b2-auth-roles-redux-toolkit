
type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

export const fetchWithoutToken = ( endpoint: string, data?: any, method: Method = 'GET' ) => {

  const url: string = `${process.env.REACT_APP_API_URL}${endpoint}`;

  if ( method === 'GET' ) {
    return fetch( url );
  } else {
    return fetch( url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify( data ),
    });
  }
}

export const fetchWithToken = ( endpoint: string, data?: any, method: Method = 'GET' ) => {

  const url: string = `${process.env.REACT_APP_API_URL}${endpoint}`;
  const token: string = localStorage.getItem('auth-app-token') || '';

  if ( method === 'GET' ) {
    return fetch( url, {
      method,
      headers: {
        'x-token': token,
      }
    });
  } else {
    return fetch( url, {
      method,
      headers: {
        'x-token': token,
        'Content-Type': 'application/json',
      },
      body: JSON.parse( data ),
    })
  }
}