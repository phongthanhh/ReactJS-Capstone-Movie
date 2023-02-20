/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import axios from 'axios'
import { TOKEN_CYBER } from 'constant'

export default function CarouselMovie() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  }

  const [arrBanner, setBanner] = useState([])

  const getBanner = () => {
    const promise = axios({
      method: 'GET',
      url: 'https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachBanner',
      headers: {
        TokenCybersoft: TOKEN_CYBER
      }
    })

    promise.then((result) => {
      // console.log(result.data.content)
      setBanner(result.data.content)
    })

    promise.catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    getBanner()
  }, [])

  const renderBanner = () => arrBanner.map((banner) => (
    <div key={banner.maBanner}>
      <img style={{ width: '100%', height: '400px' }} src={banner.hinhAnh} alt="" />
    </div>
  ))

  return (
    <div style={{ background: 'url(https://www.cgv.vn/skin/frontend/cgv/default/images/bg_c_bricks.png)' }}>
      <Slider {...settings} style={{ width: '75%', margin: 'auto' }}>
        {renderBanner()}
      </Slider>
    </div>
  )
}
