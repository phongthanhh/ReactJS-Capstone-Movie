import HomeFooter from 'components/HomeFooter/HomeFooter'
import React from 'react'
import { Route } from 'react-router'
import HeaderHome from '../../pages/Home/Layouts/Header/HeaderHome'

function HomeTemplate(props) {
  return (
    <Route
      path={props.path}
      render={(propsRoute) => (
        <>
          <HeaderHome />
          <props.component {...propsRoute} />
          <HomeFooter />
        </>
      )}
    />
  )
}

export default HomeTemplate
