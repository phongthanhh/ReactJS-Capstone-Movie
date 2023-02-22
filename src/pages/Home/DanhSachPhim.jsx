/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react'
import { Card } from 'antd'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { TOKEN_CYBER } from 'constant'

export default function DanhSachPhim() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  }

  const [arrayMovie, setMovie] = useState([])
  const [dangChieu, setDangChieu] = useState(true)

  const getMovie = () => {
    const promise = axios({
      method: 'GET',
      url: 'https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
      headers: {
        TokenCybersoft: TOKEN_CYBER
      }
    })
    promise.then((result) => {
      // console.log(result.data)
      setMovie(result.data.content)
    })

    promise.catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    getMovie()
  }, [])

  const renderMovie = () => arrayMovie.map((movie) => {
    if (dangChieu) {
      if (movie.dangChieu) {
        return (
          <div key={movie.maPhim}>
            <NavLink to={`/home/film-detail/${movie.maPhim}`}>
              <Card
                hoverable
                className="px-2"
                style={{ width: '100%', border: 'none' }}
                cover={<img alt="example" src={movie.hinhAnh} style={{ height: '400px' }} />}
              >
                <p>{movie.tenPhim}</p>
              </Card>
            </NavLink>

          </div>
        )
      }
    } else if (!movie.dangChieu) {
      return (
        <div key={movie.maPhim}>
          <NavLink to={`/home/film-detail/${movie.maPhim}`}>
            <Card
              hoverable
              className="px-2"
              style={{ width: '100%', border: 'none' }}
              cover={<img alt="example" src={movie.hinhAnh} style={{ height: '400px' }} />}
            >
              <p>{movie.tenPhim}</p>
            </Card>
          </NavLink>
        </div>
      )
    }
    return null
  })

  return (
    <div className="mt-4" style={{ backgroundColor: '#fcf6dc' }}>
      <div className="mt-3" style={{ marginLeft: '10%' }}>
        <button
          onClick={() => {
            setDangChieu(true)
          }}
          className="btn btn-primary mr-3"
          type="button"
        >
          Phim đang chiếu

        </button>
        <button
          onClick={() => {
            setDangChieu(false)
          }}
          className="btn btn-primary"
          type="button"
        >
          Phim sắp chiếu

        </button>
      </div>
      <div>
        <h3 style={{ color: 'red', fontSize: '30px', textAlign: 'center' }}>
          Phim
          {' '}
          {dangChieu ? 'đang chiếu' : 'sắp chiếu'}
        </h3>
        <Slider className="listMovie" {...settings} style={{ width: '80%', margin: 'auto' }}>
          {renderMovie()}
        </Slider>
      </div>

    </div>
  )
}
