import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { history } from '../../App'
import { TOKEN_CYBER } from '../../ulti/settings'
import ChiTietPhim from './ChiTietPhim'
import LichChieu from './LichChieu'

export default function ThongTinChiTiet(props) {
    //console.log(props)
    
    let maPhim = props.match.params;
    maPhim = maPhim.id;
    //console.log(maPhim)

    

    return (
        <div style={{backgroundColor:'#fdf7dc'}}>
            <ChiTietPhim maPhim={maPhim}/>
            <LichChieu maPhim={maPhim}/>
            
        </div>
    )
}
