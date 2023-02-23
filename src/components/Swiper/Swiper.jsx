/* eslint-disable no-unused-vars */
import HomeFilm from 'components/HomeFilm/HomeFilm'
import React, { useState, useMemo } from 'react'

import { useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Tabs } from 'antd'

const SWIPER_TABS = {
  SHOWING: 'showing',
  UPCOMING: 'upcoming'
}

function SwiperCarousel() {
  const onChange = (key) => {
    console.log(key)
  }

  const { moviesShowing, moviesUpComing } = useSelector((state) => state.movieManagerReducer)
  const [currentTab, setCurrentTab] = useState(SWIPER_TABS.SHOWING)

  const renderFilms = useMemo(() => {
    const filmsToShow = currentTab === SWIPER_TABS.SHOWING ? moviesShowing : moviesUpComing
    return filmsToShow.map((film) => (
      <SwiperSlide>
        <HomeFilm film={film} />
      </SwiperSlide>
    ))
  }, [moviesShowing, moviesUpComing, currentTab])

  const items = [
    {
      key: '1',
      label: <button type="button" onClick={() => setCurrentTab(SWIPER_TABS.SHOWING)} className="btn btn-danger text-white">Đang Chiếu</button>,
      children: 'Content of Tab Pane 1'
    },
    {
      key: '2',
      label: <button type="button" onClick={() => setCurrentTab(SWIPER_TABS.UPCOMING)} className="btn btn-danger text-white">Sắp Chiếu</button>,
      children: 'Content of Tab Pane 2'
    }
  ]

  return (
    <div className="container py-5">
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      <Swiper
        spaceBetween={15}
        slidesPerView={4}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {renderFilms}
      </Swiper>
    </div>
  )
}

export default SwiperCarousel
