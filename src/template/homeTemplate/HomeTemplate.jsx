import React from 'react'
import { Route } from 'react-router-dom'
import TieuDe from '../../components/Header'

export function HomeTemplate(props) {
  return (
    <Route
      exact
      path={props.path}
      render={(propsRoute) => (
        <>
          <TieuDe />
          <props.component {...propsRoute} />
        </>
      )}
    />
  )
}
