import React from 'react'
import axios from 'axios'
import { DOMAIN } from '../util/settings'

export const get = (url) => {
    return axios({
        url: `${DOMAIN}/${url}`,
        headers: {

        }
    })
}