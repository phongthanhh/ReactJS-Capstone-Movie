import { history } from 'App'
import { ROUTES_NAME } from 'constant'
import React from 'react'
import { CardStyle } from './HomeFilmCSS'
import imgBomTan from '../../assets/img/movieBomTan.png'

function HomeFilm(props) {
  return (
    <CardStyle>
      <div className="card-item">
        <div className="card-img" style={{ background: `url(${props.film.hinhAnh})  center center / cover no-repeat` }}>
          <img className="card-img-title" src={imgBomTan} alt="" />
          <div className="card-overlay" />
        </div>
        <div className="card-info">
          <div className="text py-2">{props.film.tenPhim}</div>
          <button
            onClick={() => {
              history.push(`${ROUTES_NAME.FILM_DETAIL}/${props.film.maPhim}`)
            }}
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
