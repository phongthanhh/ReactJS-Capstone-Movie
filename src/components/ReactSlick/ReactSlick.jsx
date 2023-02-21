import HomeFilm from 'components/HomeFilm/HomeFilm'
import React from 'react'

import { useSelector } from 'react-redux'
import Slider from 'react-slick'

function ReactSlick() {
  const settings = {
    className: 'center',
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    slidesPerRow: 2,
    height: '300px'
  }
  const { arrFilms } = useSelector((state) => state.movieManagerReducer)
  const renderFilm = () => arrFilms?.map((film) => (
    <div>
      <HomeFilm film={film} />
    </div>
  ))
  return (
    <div className=" container py-5">
      <h2>Multiple Rows</h2>
      <Slider {...settings}>
        {renderFilm()}
      </Slider>
    </div>
  )
}

export default ReactSlick
