import React from 'react'
import CarouselMovie from './CarouselMovie'
import DanhSachPhim from './DanhSachPhim'

export default function Home(props) {
  return (
    <>
        <CarouselMovie/>
        <DanhSachPhim props={props}/>
    </>
  )
}
