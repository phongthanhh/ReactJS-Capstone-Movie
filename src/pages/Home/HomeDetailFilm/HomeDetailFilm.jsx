/* eslint-disable react/jsx-indent */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFilmDetailAction } from 'redux/action/movieManagerAction'
import { Rate, Tabs } from 'antd'
import { ROUTES_NAME } from 'constant'
import { history } from 'App'
import { getLichChieuPhimService } from 'services/theaterService'
import { HomeDetail } from './DetailCss'
import '../../../assets/css/index.css'

function HomeDetailFilm(props) {
  const [showtimes, setShowtimes] = useState('')
  console.log(showtimes)
  const { heThongRapChieu } = showtimes

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getFilmDetailAction(props.match.params.id))
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getLichChieuPhimService(props.match.params.id)
      if (data) setShowtimes(data.data.content)
    }
    fetchData()
  }, [])

  const { infoFilmDetail } = useSelector((state) => state.movieManagerReducer)

  return (
    <HomeDetail className="">
      <div
        className="homeDetail"
      >
        <div className="detail__intro text-white">
          <img src={infoFilmDetail.hinhAnh} alt="" />
        </div>
        <div className="detail__overlay" />
        <div className="detail__content container">
          <div className="detail__text">
            <div className="detail__text__img">
              <img src={infoFilmDetail.hinhAnh} alt="" />
            </div>
            <div className="detail__text__info">
              <small className="info__datetime" style={{ fontSize: 12 }}>11/05/2022</small>
              <p className="name__movie">
                {infoFilmDetail.tenPhim}
                {' '}
              </p>
              <p className="digital__movie">120 phút - 10 IMDb - 2D/Digital</p>
              <a className="btn btn-danger" href="#lich">MUA VÉ</a>
            </div>
          </div>
          <div className="detail__rating">
            <Rate style={{ color: '#fb4226' }} allowHalf defaultValue={5} />
            <div className={`c100 p${infoFilmDetail.danhGia * 10} green mt-3`}>
              <span>
                {infoFilmDetail.danhGia * 10}
                %
                {' '}
              </span>
              <div className="slice">
                <div className="bar" />
                <div className="fill" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="lich" className="infoLichChieu container py-5">
        <Tabs
          tabPosition="left"
          items={heThongRapChieu?.map((item, index) => ({
            label: <img
              style={{ borderRadius: '60%', width: '50px' }}
              alt=""
              src={item.logo}
            />,
            key: index,
            children: <div>
              {item.cumRapChieu?.map((itemChild) => (
                <div>
                  <div className="info__rap">
                    <img src={item.logo} width={50} alt="" />
                    <p>{itemChild.tenCumRap}</p>
                  </div>
                  <div className="info__gioChieu">
                  {itemChild.lichChieuPhim.map((lich) => (
                          <button
                            onClick={() => history.push(`${ROUTES_NAME.CHECKOUT}/${lich.maLichChieu}`)}
                            className="btn__rap"
                            type="button"
                          >
{lich.ngayChieuGioChieu}

                          </button>
                  ))}
                  </div>
                </div>
              ))}
              {' '}
                      </div>
          }))}
        />
      </div>
    </HomeDetail>
  )
}

export default HomeDetailFilm
