import React from 'react'
import ChiTietPhim from './ChiTietPhim'
import LichChieu from './LichChieu'

export default function ThongTinChiTiet(props) {
  let maPhim = props.match.params
  maPhim = maPhim.id

  return (
    <div style={{ backgroundColor: '#fdf7dc' }}>
      <ChiTietPhim maPhim={maPhim} />
      <LichChieu maPhim={maPhim} />

    </div>
  )
}
