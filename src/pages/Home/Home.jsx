import HomeCarousel from 'components/HomeCarousel/HomeCarousel'
import ReactSlick from 'components/ReactSlick/ReactSlick'
import React, { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { getFilmAction } from '../../redux/action/movieManagerAction'
import HomeTab from './HomeTab/HomeTab'

function Home() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getFilmAction())
  }, [])
  return (
    <div>
      <HomeCarousel />
      <ReactSlick />
      <HomeTab />
    </div>
  )
}

export default Home
