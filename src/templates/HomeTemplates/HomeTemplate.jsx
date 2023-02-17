import React from 'react'
import { Route } from 'react-router'

function HomeTemplate(props) {
  return (
    <Route
      path={props.path}
      render={(propsRoute) => {
        <>
          <h2>Header</h2>
          <props.component {...propsRoute} />
          <h2>Footer</h2>
        </>
      }}
    />
  )
}

export default HomeTemplate
