import React, { useEffect, useState } from 'react'
import { Col, Row, Card } from 'antd';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import { connect, useDispatch, useSelector } from 'react-redux';
import { NavLink, Router } from 'react-router-dom';
import { TOKEN_CYBER } from '../../ulti/settings';

export default function DanhSachPhim(props) {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  let [arrayMovie, setMovie] = useState([]);
  let [dangChieu, setDangChieu] = useState(true);


  useEffect(() => {
    getMovie()
  }, [])

  let getMovie = () => {
    let promise = axios({
      method: 'GET',
      url: 'https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
      headers: {
        'TokenCybersoft': TOKEN_CYBER
      }
    })
    promise.then((result) => {
      //console.log(result.data)
      setMovie(result.data.content)
    })

    promise.catch((error) => {
      console.log(error)
    })

  }

  let renderMovie = () => {
    //console.log(dangChieu)
    return arrayMovie.map((movie) => {
      if (dangChieu) {
        if (movie.dangChieu) {
          return <div key={movie.maPhim}>
            <NavLink to={`/home/film-detail/${movie.maPhim}`}>
              <Card
                hoverable
                className='px-2'
                style={{ width: '100%', border: 'none' }}
                cover={<img alt="example" src={movie.hinhAnh} style={{ height: '400px' }} />}>
                <p>{movie.tenPhim}</p>
              </Card>
            </NavLink>

          </div>
        }
      }
      else {
        if (!movie.dangChieu) {
          return <div key={movie.maPhim}>
            <NavLink to={`/home/film-detail/${movie.maPhim}`}>
              <Card
                hoverable
                className='px-2'
                style={{ width: '100%', border: 'none' }}
                cover={<img alt="example" src={movie.hinhAnh} style={{ height: '400px' }} />}>
                <p>{movie.tenPhim}</p>

              </Card>
            </NavLink>
          </div>
        }
      }


    })
  }
  return (
    <div className='mt-4' style={{ backgroundColor: '#fcf6dc' }}>
      <div className='mt-3' style={{ marginLeft: '10%' }}>
        <button onClick={() => {
          setDangChieu(true);
        }} className='btn btn-primary mr-3'>Phim đang chiếu</button>
        <button onClick={() => {
          setDangChieu(false);
        }} className='btn btn-primary'>Phim sắp chiếu</button>
      </div>
      <div>
        <h3 style={{ color: 'red', fontSize: '30px', textAlign: 'center' }}>Phim {dangChieu ? "đang chiếu" : "sắp chiếu"}</h3>
        <Slider className='listMovie' {...settings} style={{ width: '80%', margin: 'auto' }}>
          {renderMovie()}
        </Slider>
      </div>

    </div>
  )
}

