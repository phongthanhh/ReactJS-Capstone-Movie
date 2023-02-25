import React from 'react'
import { Tabs } from 'antd'
import { useSelector } from 'react-redux'
import { history } from 'App'
import { ROUTES_NAME } from 'constant'
import dayjs from 'dayjs'
import { TabCp } from './HomeTabCSS'

function HomeTab() {
  const { arrHeThongRap } = useSelector((state) => state.theaterReducer)

  return (
    <TabCp className="py-5 container text-white">
      <Tabs
        tabPosition="left"
        items={arrHeThongRap.map((rap, index) => ({
          label: <img
            style={{ borderRadius: '60%', width: '50px' }}
            alt="logoTheater"
            src={rap.logo}
          />,
          key: index,
          children: <Tabs
            tabPosition="left"
            items={rap.lstCumRap.map((rapChild, indexChild) => ({
              label: (
                <div style={{ maxHeight: '500px', overflowY: 'auto' }} className="text-white rapName">
                  <img src={rap.logo} width={60} alt="" />
                  <div className="rapChild__info">
                    <p className="rapChil__name">{rapChild.tenCumRap}</p>
                    <p className="rapChil__diaChi">
                      {rapChild.diaChi}
                    </p>
                  </div>
                </div>),
              key: indexChild,
              children: (
                <div>
                  {rapChild.danhSachPhim.map((film) => (
                    <div className="detail__films">
                      <div className="film__tenphim">
                        <img src={film.hinhAnh} alt="" />
                        <p>{film.tenPhim}</p>
                      </div>
                      <div className="film__giochieu">
                        {film.lstLichChieuTheoPhim.slice(0, 8).map((item) => (
                          <div>
                            <button
                              onClick={() => history.push(`${ROUTES_NAME.CHECKOUT}/${item.maLichChieu}`)}
                              type="button"
                              className="film__giochieu__detail"
                            >
                              {dayjs(item.ngayChieuGioChieu).format('hh:mm')}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )
            }))}
          />
        }))}
      />
    </TabCp>
  )
}

export default HomeTab
