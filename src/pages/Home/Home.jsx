import HomeCarousel from 'components/HomeCarousel/HomeCarousel'
import Swiper from 'components/Swiper/Swiper'
import React, { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { getThongTinHeThongRapAction } from 'redux/action/theaterAction'
import { getFilmAction } from '../../redux/action/movieManagerAction'
import HomeTab from './HomeTab/HomeTab'

function Home() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getFilmAction())
    dispatch(getThongTinHeThongRapAction())
  }, [])
  return (
    <div className="text-white" style={{ background: '#111827' }}>
      <HomeCarousel />
      <Swiper />
      <HomeTab />
    </div>
  )
}

export default Home
