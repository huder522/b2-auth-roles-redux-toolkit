import React from 'react'
import { Provider } from 'react-redux'
import { AppRouter } from './routers/AppRouter'
import { store } from './state/store';

export const AuthApp = () => {
  return (
    <>
      <Provider store={ store }>
        <AppRouter />
      </Provider>
    </>
  )
}
