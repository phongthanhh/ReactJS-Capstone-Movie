/* eslint-disable no-unused-vars */
import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import screen from '../../../assets/img/screen.png'
import backGround from '../../../assets/img/background.jpg'
// import hero from '../../../assets/img/hero-1.jpg'
import { bookTicketAction, getTicketRoomAction, selectSeatAction } from '../../../redux/action/bookTicketManageAction'
import './checkOut.css'

function CheckOut(props) {
  const dispatch = useDispatch()
  const { ticketRoomDetail, seatsSelecting } = useSelector((state) => state.bookTicketManageReducer)

  const { thongTinPhim, danhSachGhe } = ticketRoomDetail

  useEffect(() => {
    dispatch(getTicketRoomAction(props.match.params.id))
  }, [])

  const onCheckedSeat = (seat) => {
    dispatch(selectSeatAction(seat))
  }

  const renderSeats = useMemo(() => danhSachGhe?.map((seat, index) => {
    const renderClassSeat = (chair = {}) => {
      if (chair.selecting) return 'bookingSeat'
      if (chair.daDat) return 'bookedSeat'
      if (chair.loaiGhe === 'Vip') return 'vipSeat'
      return 'seat'
    }

    return (
      <>
        <button onClick={() => onCheckedSeat(seat)} type="button" className={renderClassSeat(seat)}>{seat.stt}</button>
        {(index + 1) % 16 === 0 ? <br /> : ' ' }
      </>
    )
  }), [danhSachGhe])

  return (
    <div style={{ backgroundImage: `url(${backGround})` }}>
      <div className="container py-5">
        <div className="row">
          <div className="col-9">
            <div className="screen">
              <img style={{ width: '91%' }} src={screen} alt="" />
            </div>
            <div>
              {renderSeats}
            </div>
          </div>
          <div className="col-3 text-white">
            <h3>0đ</h3>
            <h3>{thongTinPhim?.tenPhim}</h3>
            <p>
              Địa điểm:
              {thongTinPhim?.diaChi}
            </p>
            <p>
              Ngày chiếu:
              {thongTinPhim?.ngayChieu}
              {' '}
              -
              {' '}
              {thongTinPhim?.gioChieu}
            </p>
            <p>{thongTinPhim?.tenRap}</p>
            <div className="d-flex">
              <div className="w-4/5">
                <span className="text-danger mr-1">Ghế</span>
                {seatsSelecting?.map((seat) => <span className="text-green-500 mr-1">{seat.tenGhe}</span>)}

              </div>
              <div className="col-span-1">
                <span className="text-success">
                  {seatsSelecting.reduce((total, seat) => total + seat.giaVe, 0)}
                </span>
              </div>
            </div>
            <div>
              <span>Email:tangthanh@gmail.com</span>
            </div>
            <div>
              <span>Phone:02130123812</span>
            </div>
            <div>
              <button
                className="btn btn-info"
                type="button"
                onClick={() => {
                  const value = {
                    maLichChieu: props.match.params.id,
                    danhSachVe: seatsSelecting
                  }
                  dispatch(bookTicketAction(value))
                }}
              >
                Book Ticket

              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckOut
