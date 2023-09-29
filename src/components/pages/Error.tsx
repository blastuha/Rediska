import React from 'react'
import { useRouteError, isRouteErrorResponse } from 'react-router-dom'

export const ErrorPage: React.FC = () => {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    return (
      <div id='error-page'>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.data?.message}</i>
        </p>
      </div>
    )
  }

  return (
    <div id='error-page'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  )
}
