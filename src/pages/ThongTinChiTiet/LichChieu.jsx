import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { TOKEN_CYBER } from '../../ulti/settings'

export default function LichChieu(maPhim) {
  let [thongTinRap, setRap] = useState([])
  let [thongTinLichChieu, setLichChieu] = useState([])
  let id = maPhim.maPhim
  useEffect(() => {
    getRapPhim();
}, [])


let getRapPhim = () => {
    let promise = axios({
        method: 'GET',
        url: `https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`,
        headers: {
            'TokenCybersoft': TOKEN_CYBER
        }
    })
    promise.then((result) => {
        console.log(result.data.content.heThongRapChieu);
        setRap(result.data.content.heThongRapChieu)
    })

    promise.catch((error) => {
        console.log(error)
    })
}

let renderRap = () => {
    return thongTinRap.map((rap) => {
        return <div key={rap.maHeThongRap} style={{ borderBottom: '2px solid gray' }} onClick={() => {
            getLichChieu(rap.maHeThongRap)
        }}>
            <img style={{ width: '100px' }} src={rap.logo} alt="abc" />
            <span>{rap.tenHeThongRap}</span>
        </div>
    })
}

let getLichChieu = (maRap) => {
    let viTri = thongTinRap.findIndex((rap) => {
        return rap.maHeThongRap === maRap
    })
    let cumRapChieu = thongTinRap[viTri].cumRapChieu;
    console.log(cumRapChieu)
    setLichChieu(cumRapChieu);
}

let renderLichChieu = () => {
    return thongTinLichChieu.map((lich) => {
        return <div key={lich.maCumRap}>
            <h4>{lich.tenCumRap}</h4>
            <p>{lich.diaChi}</p>
            <div>{
                    lich.lichChieuPhim.map((phim) => {
                        return <div key={phim.maRap}>
                            <p>{phim.tenRap}: {phim.ngayChieuGioChieu}</p>
                        </div>
                    })
                
                }</div>
        </div>
    })
}
  return (
    <div className='my-5' style={{width:'60%',margin:'auto', boxShadow:'1px 0px 10px'}}>
                <div className="row">
                    <div className="col-3">
                        {renderRap()}
                    </div>
                    <div className="col-9">
                        <div>
                            {renderLichChieu()}
                        </div>
                    </div>
                </div>
            </div>
  )
}
