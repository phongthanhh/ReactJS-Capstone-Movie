import HomeFooter from 'components/HomeFooter/HomeFooter'
import HomeHeader from 'components/HomeHeader/HomeHeader'
import React from 'react'
import { Route } from 'react-router'

function HomeTemplate(props) {
  return (
    <Route
      path={props.path}
      render={(propsRoute) => (
        <>
          <HomeHeader {...propsRoute} />
          <props.component {...propsRoute} />
          <HomeFooter />
        </>
      )}
    />
  )
}

export default HomeTemplate
