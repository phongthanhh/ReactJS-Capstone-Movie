import { history } from 'App'
import { ROUTES_NAME } from 'constant'
import React from 'react'

import { VideoCameraOutlined } from '@ant-design/icons'
import { CardStyle } from './HomeFilmCSS'
import imgBomTan from '../../assets/img/movieBomTan.png'

function HomeFilm(props) {
  return (
    <CardStyle>
      <div
        className="card-item"
        aria-hidden="true"
        onClick={() => {
          history.push(`${ROUTES_NAME.FILM_DETAIL}/${props.film.maPhim}`)
        }}
      >
        <div className="card-img" style={{ background: `url(${props.film.hinhAnh})  center center / cover no-repeat` }}>
          <img className="card-img-title" src={imgBomTan} alt="" />
          <div className="card-overlay" />
        </div>
        <div className="card-info">
          <div className="text py-3 font-medium flex items-center">
            <VideoCameraOutlined style={{ color: '#108f3e' }} />
            <span className="ml-2">
              {props.film.tenPhim.toUpperCase()}
            </span>
          </div>
          <button
            className="btnCard"
            type="button"
          >
            Chi Tiết

          </button>
        </div>
      </div>
    </CardStyle>
  )
}

export default HomeFilm
