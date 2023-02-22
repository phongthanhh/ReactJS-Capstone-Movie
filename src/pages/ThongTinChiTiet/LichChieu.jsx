import axios from 'axios'
import { TOKEN_CYBER } from 'constant'
import React, { useEffect, useState } from 'react'

export default function LichChieu(maPhim) {
  const [thongTinRap, setRap] = useState([])
  const [thongTinLichChieu, setLichChieu] = useState([])
  const id = maPhim.maPhim

  const getRapPhim = () => {
    const promise = axios({
      method: 'GET',
      url: `https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`,
      headers: {
        TokenCybersoft: TOKEN_CYBER
      }
    })
    promise.then((result) => {
      console.log(result.data.content.heThongRapChieu)
      setRap(result.data.content.heThongRapChieu)
    })

    promise.catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    getRapPhim()
  }, [])

  const getLichChieu = (maRap) => {
    const viTri = thongTinRap.findIndex((rap) => rap.maHeThongRap === maRap)
    const { cumRapChieu } = thongTinRap[viTri]
    console.log(cumRapChieu)
    setLichChieu(cumRapChieu)
  }

  const renderRap = () => thongTinRap.map((rap) => (
    <div
      key={rap.maHeThongRap}
      style={{ borderBottom: '2px solid gray' }}
      onClick={() => getLichChieu(rap.maHeThongRap)}
      aria-hidden="true"
    >
      <img style={{ width: '100px' }} src={rap.logo} alt="abc" />
      <span>{rap.tenHeThongRap}</span>
    </div>
  ))

  const renderLichChieu = () => thongTinLichChieu.map((lich) => (
    <div key={lich.maCumRap}>
      <h4>{lich.tenCumRap}</h4>
      <p>{lich.diaChi}</p>
      <div>
        {lich.lichChieuPhim.map((phim) => (
          <div key={phim.maRap}>
            <p>
              {phim.tenRap}
              :
              {' '}
              {phim.ngayChieuGioChieu}
            </p>
          </div>
        ))}
      </div>
    </div>
  ))
  return (
    <div className="my-5" style={{ width: '60%', margin: 'auto', boxShadow: '1px 0px 10px' }}>
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
