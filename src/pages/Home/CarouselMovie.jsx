import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';

export default function CarouselMovie() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  let [arrBanner,setBanner] = useState([])
  useEffect(() => {
    getBanner()
  },[])

  let getBanner = () => {
    let promise = axios({
        method:"GET",
        url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachBanner",
        headers: {
          'TokenCybersoft':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCDEkMOgIE7hurVuZyAwNiIsIkhldEhhblN0cmluZyI6IjE0LzA3LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4OTI5MjgwMDAwMCIsIm5iZiI6MTY2MDE1MDgwMCwiZXhwIjoxNjg5NDQwNDAwfQ.nvrySbONO7THMJnLTWgEwiGszUF7VXjBUnn36QUuwsQ',
        }
    })

    promise.then((result) => {
      //console.log(result.data.content)
      setBanner(result.data.content)
    })

    promise.catch((error) => {
      console.log(error)
    })

  }

  let renderBanner = () => {
    return arrBanner.map((banner) => {
      return <div key={banner.maBanner}>
        <img style={{width:'100%',height:'400px'}} src={banner.hinhAnh} alt="" />
    </div>
    })
  }

  return (
    <div style={{background:'url(https://www.cgv.vn/skin/frontend/cgv/default/images/bg_c_bricks.png)'}}>
        <Slider {...settings} style={{width:'75%',margin:'auto'}}>
          {renderBanner()}
        </Slider>
      </div>
  )
}
