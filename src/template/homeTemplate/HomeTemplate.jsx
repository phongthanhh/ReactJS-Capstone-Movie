import React from 'react'
import { Route } from 'react-router-dom'
import TieuDe from '../../components/Header'

export const  HomeTemplate = (props) => {
    return <Route exact path={props.path} render={(propsRoute) => {
        return <>
            <TieuDe/>
            <props.component {...propsRoute} />
        </>
    }}
    />
}
