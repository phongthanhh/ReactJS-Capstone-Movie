import React from 'react'
import axios from 'axios'
import { ACCESS_TOKEN, DOMAIN, GROUP_ID, TOKEN_CYBER } from '../util/settings'

export const get = (url) => {
    return axios({
        url: `${DOMAIN}/${url}`,
        method: 'GET',
        headers: {
            'TokenCybersoft': TOKEN_CYBER
        }
    })
}

export const put = (url, data) => {
    return axios({
        url: `${DOMAIN}/${url}`,
        method: 'PUT',
        data,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem(ACCESS_TOKEN)} `,
            'TokenCybersoft': TOKEN_CYBER
        }
    })
}

export const post = (url, data) => {
    return axios({
        url: `${DOMAIN}/${url}`,
        method: 'POST',
        data,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem(ACCESS_TOKEN)} `,
            'TokenCybersoft': TOKEN_CYBER
        }
    })
}


export const del = (url) => {
    return axios({
        url: `${DOMAIN}/${url}`,
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem(ACCESS_TOKEN)} `,
            'TokenCybersoft': TOKEN_CYBER
        }
    })
}












// !TODO: Xóa sau
export const loginService = async (data) => {
    const headers = {
        'TokenCybersoft': TOKEN_CYBER,
    };
    const res = await axios.post('https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap', data, { headers })
    return res.data;
}


// export const apiClient = axios.create({
//     headers: {
//         'Authorization': `${localStorage.getItem(ACCESS_TOKEN)}`,
//         'TokenCybersoft': TOKEN_CYBER
//     }
// });
