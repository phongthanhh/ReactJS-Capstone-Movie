/* eslint-disable no-unused-vars */
import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import screen from '../../../assets/img/screen.png'
import backGround from '../../../assets/img/background.jpg'
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
        <button disabled={seat.daDat} onClick={() => onCheckedSeat(seat)} type="button" className={renderClassSeat(seat)}>{seat.stt}</button>
        {(index + 1) % 16 === 0 ? <br /> : ' ' }
      </>
    )
  }))

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
            <div className="mt-5 flex justify-center">
              <table className="divide-y divide-gray-200 w-2/3">
                <thead className="bg-gray-50">
                  <tr>
                    <th>Empty Seat</th>
                    <th>Booking Seat</th>
                    <th>Vip Seat</th>
                    <th>Booked Seat</th>
                    <th>Your Seat</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <button type="button" className="seat text-center"> </button>
                    </td>
                    <td>
                      <button type="button" className="bookingSeat text-center"> </button>
                    </td>
                    <td>
                      <button type="button" className="vipSeat text-center"> </button>
                    </td>
                    <td>
                      <button type="button" className="bookedSeat text-center"> </button>
                    </td>
                    <td>
                      <button type="button" className="seat text-center"> </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-3 text-white formBookTicket" style={{ fontSize: '0.8em' }}>
            <h2 style={{
              padding: '1em', textAlign: 'center', borderBottom: '1px dotted #fff', fontSize: '1.5em'
            }}
            >
              {thongTinPhim?.tenPhim}
            </h2>
            <div className="d-flex py-3">
              <span>Địa điểm:</span>
              <span>{thongTinPhim?.diaChi}</span>
            </div>
            <div className="py-3">
              Ngày chiếu:
              {thongTinPhim?.ngayChieu}
              {' '}
              -
              {' '}
              {thongTinPhim?.gioChieu}
            </div>
            <div className="py-3">{thongTinPhim?.tenRap}</div>
            <div className="d-flex py-3">
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
            <div className="py-3">
              <span>Email:tangthanh@gmail.com</span>
            </div>
            <div className="py-3">
              <span>Phone:02130123812</span>
            </div>
            <div className="pt-5">
              <button
                className="btn btn-danger w-100"
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
