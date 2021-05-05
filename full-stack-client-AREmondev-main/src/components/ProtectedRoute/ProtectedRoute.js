import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
function ProtectedRoute({ children, ...rest }) {
  const { login } = useContext(AuthContext)
  return (
    <Route
      {...rest}
      render={({ location }) =>
        login ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}

export default ProtectedRoute
