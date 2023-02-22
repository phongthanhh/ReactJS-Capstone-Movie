import { history } from 'App'
import axios from 'axios'
import { ROUTES_NAME, TOKEN_CYBER } from 'constant'
import React, { useEffect, useState } from 'react'

export default function ChiTietPhim(maPhim) {
  const ma = maPhim.maPhim

  const [thongTinMovie, setThongTin] = useState({})
  const getThongTinMovie = () => {
    const promise = axios({
      method: 'GET',
      url: `https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${ma}`,
      headers: {
        TokenCybersoft: TOKEN_CYBER
      }
    })

    promise.then((result) => {
      console.log(result.data)
      setThongTin(result.data.content)
    })

    promise.catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    getThongTinMovie()
  }, [])
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <img src={thongTinMovie.hinhAnh} style={{ width: '100%' }} alt="abc" />
        </div>
        <div className="col-8">
          <h3>{thongTinMovie.tenPhim}</h3>
          <p>{thongTinMovie.moTa}</p>
          <p>
            Đánh giá:
            {' '}
            {thongTinMovie.danhGia}
            {' '}
          </p>
          <p>
            Ngày khởi chiếu:
            {' '}
            {thongTinMovie.ngayKhoiChieu}
          </p>
          <a href={thongTinMovie.trailer}>
            <button type="button" className="btn btn-success mr-2">Trailer</button>
          </a>

          <button
            onClick={() => {
              history.push(`${ROUTES_NAME.CHECKOUT}/46421`)
            }}
            type="button"
            className="btn btn-danger"
          >
            Mua vé ngay

          </button>
        </div>
      </div>
    </div>
  )
}
